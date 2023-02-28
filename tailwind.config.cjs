/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mayzor' :" url('/src/img/mayzor.png')",
      },
      fontFamily: {
        inter: ["Inter"]
      },
      colors: {
        primary: "#4C5F82",
        secondary: "#516BC7"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
})