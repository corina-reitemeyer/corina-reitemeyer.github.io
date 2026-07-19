/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sofia-pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
        note: ['Caveat', 'Segoe Print', 'Comic Sans MS', 'cursive'],
      },

      colors: {
        customYellow: '#ffd803',

        ink: 'var(--ink)',
        charcoal: 'var(--charcoal)',
        'charcoal-soft': 'var(--charcoal-soft)',
        paper: 'var(--paper)',
        'paper-soft': 'var(--paper-soft)',
        'paper-muted': 'var(--paper-muted)',
        'teal-deep': 'var(--teal-deep)',
        teal: 'var(--teal)',
        'teal-mid': 'var(--teal-mid)',
        'teal-bright': 'var(--teal-bright)',
        'teal-mist': 'var(--teal-mist)',
        note: 'var(--note)',
        rule: 'var(--rule)',
        focus: 'var(--focus)',
      },

      spacing: {
        'space-xs': '0.5rem',
        'space-sm': '1rem',
        'space-md': '1.5rem',
        'space-lg': '3rem',
        'space-xl': '5.5rem',
        'space-2xl': '7.5rem',
        'section-pad': 'clamp(4.5rem, 10vw, 7.5rem)',
      },

      maxWidth: {
        measure: '38rem',
        page: 'min(1180px, calc(100% - clamp(1.5rem, 4vw, 3rem)))',
      },

      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        reveal: '850ms',
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        ticker: 'ticker-scroll 55s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
