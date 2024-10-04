/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'algerian': ['Algerian', 'cursive'],
    },
    colors: {
      'primary': '#b7bab4',
      'secondary': '#e2dfd4',
      'textcol': '#0b1214',
    }
  },
  plugins: [],
}