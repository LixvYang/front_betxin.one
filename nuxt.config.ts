// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: './locales/nuxt-i18n.ts'
  },
  devtools: { enabled: true },
  build: { 
    transpile: ['vuetify'], 
  }
});
