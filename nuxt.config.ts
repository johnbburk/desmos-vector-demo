// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  plugins: [
    { src: '~/plugins/desmos.client.js', mode: 'client' }
  ]
})
