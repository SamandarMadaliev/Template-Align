/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      "colors":{
        "primary":"#ADC9A6",
        "primary-dark":"#84A17D",
        "primary-light":"#F3F7F2",
        "secondary":"#153C3C",
        "font-light":"#6C8989",
      },
      backgroundImage: {
        'cta': "url('./img/cta-background-img.png')",
      }
    },
  },
  plugins: [],
}