// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', '@sidebase/nuxt-session'
  ],
  plugins: [
    {
      src: '~/plugins/notyf.client.ts',
      mode: 'client'
    }
  ],
  app: {
    head: {
      title: 'Dojo Merch - Nuxt 3',
      meta: [
        { name: 'description', content: 'Occaecat mollit culpa labore labore ullamco ut.' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/b026c11a83.js', crossorigin: 'anonymous' }
      ]
    }
  }
})
