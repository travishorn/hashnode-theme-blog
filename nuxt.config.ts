import typography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss", 'nuxt-icon'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'hashnode-gray-800': '#282828',
            'hashnode-darkblue-900': '#060919',
            'hashnode-darkblue-950': '#020617'
          }
        }
      },
      plugins: [typography]
    }
  }
})
