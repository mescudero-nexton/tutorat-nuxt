// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: [
    "~/assets/css/main.css",
  ],

  modules: [
    "@vueuse/nuxt",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: [
      "constants",
    ],
  },

  compatibilityDate: "2024-07-09",
});