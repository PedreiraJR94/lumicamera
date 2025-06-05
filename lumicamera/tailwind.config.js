/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf5ff',
          100: '#d9ecff',
          200: '#b8daff',
          300: '#8ac0ff',
          400: '#5a9eff',
          500: '#3178ff',
          600: '#1a5af7',
          700: '#1347e3',
          800: '#163ab8',
          900: '#183791',
        },
        secondary: {
          50: '#ebfef7',
          100: '#d0fceb',
          200: '#a4f7d8',
          300: '#6aecbe',
          400: '#37d8a0',
          500: '#17c188',
          600: '#09a070',
          700: '#0a815b',
          800: '#0d654a',
          900: '#0e523e',
        },
        accent: {
          50: '#fffcea',
          100: '#fff6c6',
          200: '#ffea85',
          300: '#ffd646',
          400: '#ffc21d',
          500: '#ffa006',
          600: '#ff7a01',
          700: '#cc5302',
          800: '#a1400a',
          900: '#82360d',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        dark: {
          700: '#1f2937',
          800: '#111827',
          900: '#0f172a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        'prose': '65ch',
      },
      spacing: {
        'safe': 'max(1.5rem, 5vw)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            lineHeight: '1.75',
            '> *': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
      },
    },
  },
  plugins: [],
};