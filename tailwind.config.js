/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary : '#37517E',
        Second: '#B7BED0'
      }
    },
  },
  plugins: [require("daisyui")],
}

