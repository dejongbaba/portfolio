const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        'lg': '800px',
      },
    },
    extend: {
      colors: {
        background: '#030303',
        foreground: '#ffffff',
        'accent-green': '#00DB6D',
        'accent-gray': '#c7cad8',
      },
      fontSize: {
        'bio': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }], // 36px editorial
        'bio-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }], // 28px editorial
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        'full': '9999px',
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Inter"', ...fontFamily.sans],
        mono: ['"SF Mono"', '"Fira Code"', ...fontFamily.mono],
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};
