/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  theme: {
    extend: {
      zIndex: {
        '70': '70',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
