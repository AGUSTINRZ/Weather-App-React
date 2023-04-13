/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": "'Rubik', system-ui, sans-serif"
      }
    },
  },
  plugins: [],
}

