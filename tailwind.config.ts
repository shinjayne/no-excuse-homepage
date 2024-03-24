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
          '10%' : {opacity : '0.5'},
          '20%' : {opacity : '1'},
        }
      },
      animation: {
        slide: 'slide 30s linear infinite',
        blink : 'blink 5s 1s linear infinite'
      },
    },
  },

  darkMode: 'class',
  plugins: [nextui()],
}



export default config;
