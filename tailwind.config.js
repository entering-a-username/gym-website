/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js"],
  theme: {
    extend: {
      zIndex: {
        '70': '70',
      },
    },
    
    screens: {
      'smsm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: 'class'
}
