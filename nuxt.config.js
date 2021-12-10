export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Joyce` : 'Joyce';
    },
    htmlAttrs: {
      lang: 'zh-Hans-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reset-css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gtag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      '~/assets/scss/abstracts/*.scss',
    ]
  },

  env: {
    host: process.env.DOMAIN ? `https://${process.env.DOMAIN}` : 'http://localhost:3000',
    homePage: { name: 'works-categories-ui' },
  },

  generate: {
    fallback: '404.html'
  },

  googleFonts: {
    display: 'swap',
    families: {
      'Montserrat': {
        wght: [400, 500, 700],
      },
      'Noto+Sans+TC': {
        wght: [300, 400, 500, 700],
      }
    }
  }
}
