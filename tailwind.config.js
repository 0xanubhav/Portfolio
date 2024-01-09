/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,jsx,tsx,js}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

