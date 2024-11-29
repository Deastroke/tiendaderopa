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
        primary: '#071952', // Azul para botones o links
        secondary: '#088395', // Verde para otros elementos
        highlight: '#f2994a', // Naranja para resaltar 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Asegúrate de tener esta línea
      },
    },
  },
  plugins: [],
}
