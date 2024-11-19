export const lineLogin = async () => {
    try {
        const config = useRuntimeConfig();

        if (!config.public.lineClientId || !config.public.lineRedirectUri) {
            throw new Error('Missing required Line OAuth configuration');
        }

        const lineAuthUrl = 'https://access.line.me/oauth2/v2.1/authorize';
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: config.public.lineClientId,
            redirect_uri: config.public.lineRedirectUri,
            state: crypto.randomUUID(),
            scope: 'profile openid email',
            prompt: 'consent',
            bot_prompt: 'normal'
        });

        const fullUrl = `${lineAuthUrl}?${params.toString()}`;
        return fullUrl;

    } catch (error) {
        console.error('Error in lineLogin:', error);
        throw error;
    }
}; 