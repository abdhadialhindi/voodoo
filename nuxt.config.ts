// https://nuxt.com/docs/api/configuration/nuxt-config

import en from "./plugins/en.json"
// import en from '~~/plugins/en'
export default defineNuxtConfig({


  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/style/main.scss",
    "@/assets/style/style.css"
  ],
  build: {
    transpile: ["vuetify", 'swiper',],
  },
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: en
      }
    }
  }

});

