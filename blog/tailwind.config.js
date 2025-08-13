/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ADICIONE ESTA LINHA PARA HABILITAR OS ESTILOS PROSE
    require('@tailwindcss/typography'),
  ],
}