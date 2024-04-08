/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4804', // Replace with your desired color value
        secondary: '#b1e6d5',
        // Add more custom colors as needed
      },
      fontFamily: {
        'berlin-rounded': ['Berlin Round', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-gradients')],
}

