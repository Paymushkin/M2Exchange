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
    '@/assets/styles/fonts.css',
    '@/assets/styles/main.css',
    '@/assets/styles/global.css',
    '@/assets/styles/slides.css'
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