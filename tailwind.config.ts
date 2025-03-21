import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: '#A1A1A1',
        },
        primary: {
          DEFAULT: '#5E6AD2',
          foreground: '#FFFFFF',
          muted: 'rgba(94, 106, 210, 0.1)',
        },
        secondary: {
          DEFAULT: '#8A4FFF',
          foreground: '#FFFFFF',
          muted: 'rgba(138, 79, 255, 0.1)',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          foreground: '#FFFFFF',
          border: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display': ['72px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'dots-pattern': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
      },
      backgroundSize: {
        'dots': '24px 24px',
      },
    },
  },
  plugins: [],
}

export default config 