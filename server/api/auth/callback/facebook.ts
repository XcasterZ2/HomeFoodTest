import { PrismaClient } from '@prisma/client'

interface FacebookTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface FacebookUserInfo {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      url: string;
    };
  };
}

interface FacebookAuthError {
  message: string;
  status?: number;
  data?: any;
}

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  console.log('=== Facebook Callback Started ===');
  console.log('Configuration check:', {
    clientIdPresent: !!config.public.facebookAppId,
    clientSecretPresent: !!config.facebookClientSecret,
    redirectUriPresent: !!config.public.facebookRedirectUri
  });

  if (query.code) {
    try {

      const tokenResponse = await $fetch<FacebookTokenResponse>('https://graph.facebook.com/v18.0/oauth/access_token', {
        params: {
          client_id: config.public.facebookAppId,
          client_secret: config.facebookClientSecret,
          redirect_uri: config.public.facebookRedirectUri,
          code: query.code.toString()
        }
      });

      console.log('Token exchange successful');

      // Get user info
      const userInfo = await $fetch<FacebookUserInfo>('https://graph.facebook.com/me', {
        params: {
          fields: 'id,name,email,picture',
          access_token: tokenResponse.access_token
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
              { facebookId: userInfo.id }
            ]
          }
        });

        console.log('Existing user:', existingUser);

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

        // Create new user
        const newUser = await prisma.user.create({
          data: {
            email: userInfo.email,
            fullname: userInfo.name,
            facebookId: userInfo.id,
            profileImage: userInfo.picture?.data?.url,
            role: 'user',
            phoneNumber: null,
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
      const error = e as FacebookAuthError;
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