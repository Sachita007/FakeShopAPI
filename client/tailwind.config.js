/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      fontFamily: {
        Rampart: ['Poppins', 'sans - serif'],
        Roboto: ['Roboto', 'sans - serif']
      },
    },
  },
  plugins: [],
}