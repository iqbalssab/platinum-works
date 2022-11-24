/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",
  ],
  theme: {
    container :{
      center : true,
      padding : '8px',
    },
    extend: {
      colors: {
        primary: '#fb923c',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      backgroundImage: {
        'bg-galeri1' : "url('/src/assets/img/galeri/img1.jpeg')"
      }
    },
  },
  plugins: [],
}
