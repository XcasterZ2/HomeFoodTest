export const facebookLogin = async () => {
    try {
        const config = useRuntimeConfig();

        if (!config.public.facebookAppId || !config.public.facebookRedirectUri) {
            throw new Error('Missing required Facebook OAuth configuration');
        }
 
        const facebookAuthUrl = 'https://www.facebook.com/v18.0/dialog/oauth';
        const params = new URLSearchParams({
            client_id: config.public.facebookAppId,
            redirect_uri: config.public.facebookRedirectUri,
            response_type: 'code',  // เปลี่ยนเป็น code แทน token
            scope: 'email,public_profile',
            state: crypto.randomUUID(),
        });

        const fullUrl = `${facebookAuthUrl}?${params.toString()}`;
        return fullUrl;

    } catch (error) {
        console.error('Error in facebookLogin:', error);
        throw error;
    } 
};