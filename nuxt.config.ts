// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
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
