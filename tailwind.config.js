/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customTeal: '#B5FFFA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add this line
  ],
}
