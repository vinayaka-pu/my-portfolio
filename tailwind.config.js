/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bohoBeige: '#f5f0e6',   // warm beige
        bohoGreen: '#52734d',   // earthy green
        bohoDarkGreen: '#3b4b36', // darker green for dark mode
      },
    },
  },
  plugins: [],
};