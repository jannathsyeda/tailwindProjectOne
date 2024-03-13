/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,css}",
  "index.html"
    ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto':['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}

