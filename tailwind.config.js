const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Bodoni-Moda' : ['Bodoni-Moda', 'serif'] ,
        'Inter' : ['Inter', 'sans empattement'] ,
        'Oswald' : ['Oswald', 'sans empattement'] ,
      },
      colors : {
        'Noir1' : '#242732',
        'Noir2' : '#333333',
        'Gris' : '#E5E5E5',
        'Gris1' : '#F5F5F5',
        'Bleu' : '#5286EC',
        'BleuFB' : '#415893'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
