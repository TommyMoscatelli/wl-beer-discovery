/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:"#997412",
          dark: "#3A2613"
        }
      },
      fontFamily: {
        sans: ['Work Sans', ...require('tailwindcss/defaultTheme').fontFamily.sans],
      },
    },
  },
  plugins: [],
}
