/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Lora:["Poppins", "sans-serif"]  
      },
      colors: {
        primary: '#038396',
        bg: '#010003',
        bg2: '#010005'
      }
    },
  },
  plugins: [],
}