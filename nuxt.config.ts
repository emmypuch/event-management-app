// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/reset.css', '~/assets/css/main.css'],
  modules: ['vue2-google-maps/nuxt'],
  googleMaps: {
    key: 'MY_API_KEY',
    libraries: ['places'],
  },
})
