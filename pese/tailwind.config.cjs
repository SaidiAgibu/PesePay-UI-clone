/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern' : "url('/banner-home.png')",
        'hero-pattern1' : "url('/banner-home-swoosh.svg')",
      }
    },
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
    },
  },
  plugins: [],
}
