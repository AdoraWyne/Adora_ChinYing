/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themedPink: "#EF2F88",
        themedOrange: "rgb(255, 112, 0)",
        themedPurple: "#a855f7"        
      },
      boxShadow: {
        'lightRounded': '0 0 18px #f5d0fe'
      }
    },
    fontFamily: {
      logo: ['Pacifico'],
    },
  },
  plugins: [],
}
