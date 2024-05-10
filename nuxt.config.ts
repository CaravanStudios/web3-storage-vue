import * as path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    "@nuxt/ui"
  ],
  googleFonts: {
    families: {
      Inter: '200..700',
    }
  }
})
