/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  backgroundImage: {
    "gradient-cover":
      "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',  // Chrome, Safari, and Opera
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}