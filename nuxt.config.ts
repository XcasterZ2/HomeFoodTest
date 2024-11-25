// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  plugins: ['~/plugins/fontawesome.js' , 
    '~/plugins/datepicker.js',
  '~/plugins/facebook-sdk.js',],
  googleFonts: {
    families: {
      Sarabun: [400, 700],
      Inter: [400, 700], 
      Kanit: [400, 700], 
      Prompt: [400,500,600, 700], 
    },
    display: 'swap',
  },runtimeConfig: {
    googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    googleRedirectUri: process.env.NUXT_GOOGLE_REDIRECT_URI,
    lineClientSecret: process.env.NUXT_LINE_CLIENT_SECRET,
    facebookClientSecret: process.env.NUXT_FACEBOOK_CLIENT_SECRET,
    public: {
      googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.NUXT_GOOGLE_REDIRECT_URI,
      lineClientId: process.env.NUXT_LINE_CLIENT_ID,
      lineRedirectUri: process.env.NUXT_LINE_REDIRECT_URI,
      facebookAppId: process.env.NUXT_FACEBOOK_APP_ID,
      facebookRedirectUri: process.env.NUXT_FACEBOOK_REDIRECT_URI,
    }
  }
})