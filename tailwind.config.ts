/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: ['18px', '22px'],   // Основной текст
        'xs': ['12px', '16px'],     // Мелкий текст
        'sm': ['16px', '20px'],     // Небольшой текст
        'lg': ['20px', '28px'],     // Увеличенный текст
        'xl': ['22px', '30px'],     // Заголовок 3-го уровня
        '2xl': ['26px', '32px'],    // Заголовок 2-го уровня
        '3xl': ['30px', '40px'],    // Заголовок 1-го уровня
        '4xl': ['60px', '70px'],    // Крупный заголовок
        '5xl': ['76px', '80px'],    // Очень крупный заголовок
      },
      colors: {
        'primary': '#4460F6',
        'primary-dark': '#2B3F9E',
        'primary-darker': '#252B5C',
        'primary-light': '#F0F3FE',
        'primary-lighter': '#426BFF',
        'secondary': '#5B7BA6',
        'accent': '#E5EDFF',
        'divider-light': '#D2DBF5',
        'dark': {
          DEFAULT: '#252B5C',
          secondary: '#2B3B70',
          deep: '#0B1F5B',
          deeper: '#202378',
        },
        'gray': {
          DEFAULT: '#58667E',
          border: '#E3E4E8',
          divider: '#D3D4E1',
          100: '#F4F5F6',
          200: '#E6E8EC',
          300: '#B1B5C4',
          400: '#777E91',
          500: '#353945',
        },
        'success': '#58BD7D',
        'error': '#FF6B6B',
        'warning': '#FFB800',
        footer: '#F4F7FF',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem', // 6px
        'lg': '55px', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
        'full': '9999px', // Полное закругление
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '100%',
        '2xl': '1680px',
      },
    },
  },
  plugins: [],
} 