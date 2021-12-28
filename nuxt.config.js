const hostName = process.env.DOMAIN ? `https://${process.env.DOMAIN}` : 'http://localhost:3000';

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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reset-css',
    { src: '~/assets/scss/main.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gtag', mode: 'client' },
    { src: '~/plugins/viewer', mode: 'client' },
    { src: '~/plugins/vue-plyr', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-purgecss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    babel: {
      presets: [
        ['@nuxt/babel-preset-app', {
          targets: { ie: 11 },
        }],
      ],
    },
    extend(config, { isClient, loaders: { vue } }) {
      vue.transformAssetUrls.ElementImageViewer = ['src'];
    },
  },



  styleResources: {
    scss: [
      '~/assets/scss/abstracts/*.scss',
    ]
  },

  env: {
    host: hostName,
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
  },

  sitemap: {
    hostname: hostName,
    gzip: false,
    exclude: [
      '/works',
      '/works/tags',
      '/works/tags/**',
    ],
    defaults: {
      lastmod: (new Date()).toISOString(),
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: `${hostName}/sitemap.xml`,
  },

  purgeCSS: {
    enabled: true,
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css', '.scss', '.sass'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ],
  }
}
