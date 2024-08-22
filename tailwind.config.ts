import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-80%)' },
        },
        blink: {
          '10%': { opacity: '0.5' },
          '20%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        fadeInDelay: {
          '0%': { opacity: '0' },
          '60%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        fadeInDelay2: {
          '0%': { opacity: '0' },
          '60%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        growWidth384: {
          '0%': { width: '0px' },
          '100%': { width: '384px' },
        },
        growWidth568: {
          '0%': { width: '0px' },
          '10%': { width: '0px' },
          '100%': { width: '700px' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
        blink: 'blink 5s 1s linear infinite',
        fadeIn: 'fadeIn 2s linear',
        fadeInDelay: 'fadeInDelay 3s linear',
        fadeInDelay2: 'fadeInDelay2 5s linear',
        growWidth384: 'growWidth384 8s linear',
        growWidth568: 'growWidth568 8s linear',
      },
    },
  },

  darkMode: 'class',
  plugins: [nextui()],
}

export default config
