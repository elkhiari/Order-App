/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}","./node_modules/flowbite/**/*.js,jsx,tsx"],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}
