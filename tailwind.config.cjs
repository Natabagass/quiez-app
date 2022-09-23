/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "Lato": "Lato",
        "Nunito": "Nunito",
        "Quicksand": "Quicksand"
      }
    },
  },
  plugins: [],
}