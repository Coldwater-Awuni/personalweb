import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
          secondary: '#1A1A2E',
          tertiary: '#0F0F23',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#B4B4B8',
          subtle: '#8B8B8D',
        },
        primary: {
          DEFAULT: '#FF4500',
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#FF4500',
          600: '#EA580C',
          700: '#C2410C',
        },
        accent: {
          DEFAULT: '#10B981',
          pink: '#F472B6',
          purple: '#A855F7',
          orange: '#F97316',
          cyan: '#06B6D4',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          muted: 'rgba(255, 255, 255, 0.05)',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
export default config
