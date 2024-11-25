import { PrismaClient } from '@prisma/client'
import { useAuthStore } from '@/stores/auth'

interface LineTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
  id_token?: string;
}

interface LineUserInfo {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  email?: string;
}

interface LineAuthError {
  message: string;
  status?: number;
  data?: any;
}

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  
//   console.log('=== Line Callback Started ===');
  
  if (query.code) {
    try {
      if (!config.public.lineClientId || !config.public.lineRedirectUri || !config.lineClientSecret) {
        console.error('Missing LINE configuration:', {
          clientId: config.public.lineClientId,
          redirectUri: config.public.lineRedirectUri,
          clientSecret: config.lineClientSecret
        });
        return sendRedirect(event, '/login?error=config_error');
      }

      // สร้าง form data สำหรับขอ token
      const formData = new URLSearchParams({
        grant_type: 'authorization_code',
        code: query.code.toString(),
        redirect_uri: config.public.lineRedirectUri,
        client_id: config.public.lineClientId,
        client_secret: config.lineClientSecret
      });

      // ขอ token
      const tokenResponse = await $fetch<LineTokenResponse>('https://api.line.me/oauth2/v2.1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      // ขอข้อมูลผู้ใช้
      const userInfo = await $fetch<LineUserInfo>('https://api.line.me/v2/profile', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`
        }
      });

      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            lineId: userInfo.userId
          }
        });

        if (existingUser) {
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

          return sendRedirect(event, `/?auth=${encodeURIComponent(JSON.stringify(authData))}`);
        }

        const newUser = await prisma.user.create({
          data: {
            email: userInfo.email,
            fullname: userInfo.displayName,
            lineId: userInfo.userId,
            profileImage: userInfo.pictureUrl,
            role: 'user',
            phoneNumber: '',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });

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
        return sendRedirect(event, '/login?error=database_error');
      }

    } catch (e: unknown) {
      const error = e as LineAuthError;
      console.error('Line authentication error:', error);
      return sendRedirect(event, '/login?error=auth_failed');
    }
  }

  return sendRedirect(event, '/login?error=no_code');
}); 