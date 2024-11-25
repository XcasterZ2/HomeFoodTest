import { PrismaClient } from '@prisma/client'
import { useAuthStore } from '@/stores/auth'

// Define interfaces
interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
  id_token: string;
}

interface GoogleUserInfo {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
}

interface GoogleAuthError {
  message: string;
  status?: number;
  data?: any;
}

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  
    console.log('=== Google Callback Started ===');
    console.log('Configuration check:', {
      clientIdPresent: !!config.public.googleClientId,
      clientSecretPresent: !!config.googleClientSecret,
      redirectUriPresent: !!config.public.googleRedirectUri
    });
    
  if (query.code) {
    try {
      const formData = new URLSearchParams({
        code: query.code.toString(),
        client_id: config.public.googleClientId,
        client_secret: config.googleClientSecret,
        redirect_uri: config.public.googleRedirectUri,
        grant_type: 'authorization_code'
      });

      // Exchange code for tokens
      const tokenResponse = await $fetch<GoogleTokenResponse>('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      console.log('Token exchange successful');

      // Get user info
      const userInfo = await $fetch<GoogleUserInfo>('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`
        }
      });

      console.log('User info retrieved:', {
        email: userInfo.email,
        name: userInfo.name
      });

      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email: userInfo.email },
              { googleId: userInfo.sub }
            ]
          }
        });

        console.log('Existing user:', existingUser);
        console.log('ID type:', typeof existingUser?.id);

        if (existingUser) {
          // สร้าง auth data สำหรับ existing user
          const authData = {
            user: {
              id: existingUser.id.toString(),
              email: existingUser.email,
              fullname: existingUser.fullname,
              phoneNumber: existingUser.phoneNumber,
              role: existingUser.role,
            },
            token: tokenResponse.access_token
          };

          // เปลี่ยนจาก status=existing เป็นส่ง auth data โดยตรง
          return sendRedirect(event, `/?auth=${encodeURIComponent(JSON.stringify(authData))}`);
        }

        const newUser = await prisma.user.create({
          data: {
            email: userInfo.email,
            fullname: userInfo.name,
            googleId: userInfo.sub,
            profileImage: userInfo.picture,
            role: 'user',
            phoneNumber: null,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });

        // สร้าง auth data ในรูปแบบเดียวกับ Line
        const authData = {
          user: {
            id: newUser.id.toString(),
            email: newUser.email,
            fullname: newUser.fullname,
            phoneNumber: newUser.phoneNumber,
            role: newUser.role,
          },
          token: tokenResponse.access_token
        };

        return sendRedirect(event, `/?auth=${encodeURIComponent(JSON.stringify(authData))}`);

      } catch (dbError) {
        console.error('Database error:', dbError);
        
        const errorDetails = {
          operation: 'user_operation',
          table: 'users',
          message: dbError.message,
          code: dbError.code
        };

        return sendRedirect(event, `/login?error=database_error&details=${encodeURIComponent(JSON.stringify(errorDetails))}`);
      } finally {
        await prisma.$disconnect();
      } 

    } catch (e: unknown) {
      const error = e as GoogleAuthError;
      console.error('Authentication error:', {
        message: error.message,
        status: error.status,
        data: error.data
      });
      
      return sendRedirect(event, '/login?error=auth_failed');
    }
  }

  return sendRedirect(event, '/login?error=no_code');
});