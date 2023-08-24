// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt', {
        autoImports: ['defineStore']
      }
    ],
    '@nuxtjs/tailwindcss', '@sidebase/nuxt-session',
    '@nuxt/image', 'nuxt-og-image',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  plugins: [
    {
      src: '~/plugins/notyf.client.ts',
      mode: 'client'
    }
  ],
  imports: {
    dirs: ['stores']
  },
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
  },
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  },
  site: {
    url: 'https://dojo-merch.vercel.app'
  }
})
