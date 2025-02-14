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
		'vue-yandex-maps/nuxt'
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
				{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/M2Exchange/favicon.ico'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/M2Exchange/favicon-32x32.png'
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/M2Exchange/favicon-16x16.png'
				},
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			]
		},
		baseURL: '/M2Exchange/',
		buildAssetsDir: 'assets'
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
			xxl: 1536
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
	},

	yandexMaps: {
		apikey: 'ваш-api-ключ', // Получите ключ на https://developer.tech.yandex.ru/
		lang: 'ru_RU',
		version: '2.1'
	},

	plugins: [{ src: '~/plugins/yandex-maps.client.ts', mode: 'client' }],

	devServer: {
		port: 3000,
	},

	vite: {
		server: {
			open: true
		}
	}
} satisfies NuxtConfig)
