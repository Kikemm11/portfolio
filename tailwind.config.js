const color = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        canvas: color('canvas'),
        surface: {
          DEFAULT: color('surface'),
          hover: color('surface-hover'),
        },
        line: {
          DEFAULT: color('border'),
          strong: color('border-strong'),
        },
        content: {
          primary: color('content-primary'),
          secondary: color('content-secondary'),
          muted: color('content-muted'),
        },
        accent: {
          DEFAULT: color('accent'),
          strong: color('accent-strong'),
          hover: color('accent-hover'),
          soft: color('accent-soft'),
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
