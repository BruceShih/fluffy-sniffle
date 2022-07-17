import { defineNuxtConfig } from 'nuxt';
import { IntlifyModuleOptions } from '@intlify/nuxt3';
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // app
  app: {
    head: {
      title: 'Nuxt 3 Awesome Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue']
  },

  // modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt'
  ],

  // build modules
  buildModules: ['@nuxtjs/eslint-module', 'unplugin-icons/nuxt', '@nuxtjs/svg'],

  // experimental features
  experimental: {
    reactivityTransform: true
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      })
    ]
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en']
    }
  },

  tailwindcss: {
    // Options
  },

  // vueuse
  vueuse: {
    ssrHandlers: true
  },

  // content
  content: {
    base: 'content'
  }

  // remember to enabled Take Over Mode
  // typescript: {
  //   shim: false
  // }
});
