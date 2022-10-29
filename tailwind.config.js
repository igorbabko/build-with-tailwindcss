const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.blue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
