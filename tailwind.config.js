/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,css}",
  "index.html"
    ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif'],
        'Roboto Slab':['Roboto Slab','serif'],
        'Roboto Condensed':['Roboto Condensed','sans-serif']
      }
    },
  },
  plugins: [],
}

