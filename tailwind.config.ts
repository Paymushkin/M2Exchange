/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans-serif']
			},
			fontSize: {
				base: ['18px', '22px'], // Основной текст
				xs: ['12px', '15px'], // Мелкий текст
				sm: ['16px', '20px'], // Небольшой текст
				lg: ['20px', '28px'], // Увеличенный текст
				xl: ['22px', '30px'], // Заголовок 3-го уровня
				'2xl': ['26px', '32px'], // Заголовок 2-го уровня
				'3xl': ['30px', '40px'], // Заголовок 1-го уровня
				'4xl': ['36px', '44px'], // Крупный заголовок
				'5xl': ['60px', '70px'], // Крупный заголовок
				'6xl': ['76px', '80px'] // Очень крупный заголовок
			},
			colors: {
				primary: {
					DEFAULT: '#4A43EC',
					darker: '#171652',
					light: '#F3F4FF',
					hover: '#171652/80'
				},
				secondary: {
					DEFAULT: '#3D62FF',
					light: '#EFF3FF'
				},
				dark: '#171652',
				white: '#FFFFFF',
				darker: '#535151',
				background: {
					light: '#F3F4FF',
					blue: '#EFF3FF'
				},
				accent: '#FB7C61',
				'divider-light': '#D2DBF5',
				'accent-blue': '#6284FF',
				gray: {
					DEFAULT: '#58667E',
					border: '#E3E4E8',
					divider: '#D3D4E1',
					100: '#F4F5F6',
					200: '#E6E8EC',
					300: '#B1B5C4',
					400: '#777E91',
					500: '#353945'
				},
				success: '#58BD7D',
				error: '#FF6B6B',
				warning: '#FFB800'
			},
			borderRadius: {
				none: '0',
				sm: '12px', // 2px
				DEFAULT: '16px', // 4px
				md: '22px', // 6px
				lg: '30px', // 8px
				xl: '40px', // 12px
				'2xl': '54px', // 16px
				'3xl': '80px', // 24px
				full: '9999px' // Полное закругление
			}
		},
		container: {
			center: true,
			padding: {
				// DEFAULT: '1rem',
				// sm: '2rem',
				// lg: '4rem',
				// xl: '50px',
				// '2xl': '80px',
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
				'2xl': '1920px'
			}
		}
	},
	plugins: []
}
