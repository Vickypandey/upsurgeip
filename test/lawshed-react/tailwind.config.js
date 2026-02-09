/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#0f1c2e',
        brass: '#ae8e59',
        sand: '#f7f4ef'
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
