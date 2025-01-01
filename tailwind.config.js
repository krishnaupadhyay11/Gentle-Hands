/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'logo1': '#84c2c7',
        'logo2': '#000000',
        'add': '#104960',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'berkshire': ['Berkshire Swash', 'sans-serif'],
        'source': ["Source Serif Pro", 'serif'],
      },
    },
  },
  plugins: [],
}

