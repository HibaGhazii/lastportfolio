/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  
  theme: {
    extend: {
      colors: {
        '161616': '#161616',
        '55106D': '#55106D',
        '757575': '#757575',
        '170826': '#170826',
      },
    },
  },
  plugins: [require('flowbite/plugin'),],
}