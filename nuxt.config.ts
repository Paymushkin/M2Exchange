// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import type { NuxtConfig } from '@nuxt/schema'

export default defineNuxtConfig({
  
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  css: [
    './assets/css/main.css',
    './assets/css/global.css'
  ],

  ssr: false,

  app: {
    head: {
      title: 'Exchange Project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap'
        }
      ]
    },
    buildAssetsDir: '/assets/', 
    baseURL: '/M2Exchange/'
  },

  image: {
    dir: 'assets/images',
    domains: ['localhost'],
    format: ['webp', 'jpg', 'png', 'svg'],
    provider: 'ipx',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 46,
          height: 46
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 800,
          quality: 90
        }
      },
      object: {
        modifiers: {
          format: 'webp',
          width: 282,
          height: 200,
          quality: 85
        }
      }
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    staticFilename: '[publicPath]/[name]-[hash][ext]'
  },

  compatibilityDate: '2025-01-21',

  colorMode: {
    preference: 'light',
    classSuffix: ''
  },

  tailwindcss: {
    exposeConfig: true,
    config: {
      content: [],
      theme: {
        extend: {}
      }
    }
  }
} satisfies NuxtConfig)