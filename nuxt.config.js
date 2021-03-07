import * as SITE_SETTINGS from './content/site/settings.json'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: SITE_SETTINGS.site_title || process.env.npm_package_name || '',
    titleTemplate: '%s - Accesorios Margot',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          SITE_SETTINGS.site_desc || process.env.npm_package_description || ''
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          SITE_SETTINGS.site_desc || process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: SITE_SETTINGS.site_title || 'Accesorios Margot'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: SITE_SETTINGS.site_title || 'Accesorios Margot'
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: SITE_SETTINGS.site_title || 'Accesorios Margot'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#000000'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    script: [
      {
        hid: 'identity-netlify',
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/vuex-persist', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    'vue-social-sharing/nuxt',
    '@nuxtjs/google-fonts'
  ],
  /*
   ** Google fonts module configuration
   */
  googleFonts: {
    families: {
      'Proza+Libre': true,
      'Open+Sans': true,
      Flamenco: true
    }
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vuex-persist']
  }
}
