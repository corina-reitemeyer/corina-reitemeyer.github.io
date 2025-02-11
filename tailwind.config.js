/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffd803',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add this line
  ],
}
