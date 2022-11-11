/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",
  ],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: '#fb923c',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      backgroundImage: {
        'bg-decor' : "url('/assets/img/bg/home-decor.jpg')"
      }
    },
  },
  plugins: [],
}
