/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themedPink: "rgb(251, 37, 118)",
        themedOrange: "rgb(255, 112, 0)",
        themedPurple: "#a855f7"        
      }
    },
    fontFamily: {
      logo: ['Pacifico'],
    },
  },
  plugins: [],
}
