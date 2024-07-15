/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './components/**/*,{html,js}',
    './pages/**/*,{html,js}',
    './index.html',
    './informasi.html',
    './keuangan.html',
    './galeri.html',
  ],
  theme: {
    extend: {
      fontfamily:{
        Poppins: ['Poppins'],
      }
      
    },
  },
  plugins: [],
}

