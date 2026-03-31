/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gamco-red': '#B7202E',
        'gamco-orange': '#E86E34',
        'gamco-dark': '#333333',
      }
    },
  },
  plugins: [],
}