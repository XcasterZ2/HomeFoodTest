export const googleLogin = async () => {
    try {
        const config = useRuntimeConfig();
        // console.log('Config:', config.public);

        if (!config.public.googleClientId || !config.public.googleRedirectUri) {
            throw new Error('Missing required Google OAuth configuration');
        }

        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const params = new URLSearchParams({
            client_id: config.public.googleClientId,
            redirect_uri: config.public.googleRedirectUri,
            response_type: 'code',
            scope: 'email profile openid',
            prompt: 'select_account',
            access_type: 'offline',
            state: crypto.randomUUID(),
        });

        const fullUrl = `${googleAuthUrl}?${params.toString()}`;
        // console.log('Generated URL:', fullUrl);

        return fullUrl;

    } catch (error) {
        console.error('Error in googleLogin:', error);
        throw error;
    }
};

