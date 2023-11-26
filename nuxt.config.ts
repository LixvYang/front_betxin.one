// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/@foxone/mvm@0.1.37/dist/mvm.min.js'}
      ]
    },
  },
  alias: {
    "@": '/'
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  i18n: {
    vueI18n: "./locales/nuxt-i18n.ts",
  },
  plugins: [
    '~/plugins/01.mixin'
  ],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
});
