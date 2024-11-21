export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const config = useRuntimeConfig();
      window.fbAsyncInit = function () {
        FB.init({
          appId: config.public.facebookAppId,
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });
      };
   
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
}); 