/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#000000', // Azul para botones o links
        secondary: '#008080', // Verde para otros elementos
        highlight: '#800080', // Naranja para resaltar 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Asegúrate de tener esta línea
      },
    },
  },
  plugins: [],
}
