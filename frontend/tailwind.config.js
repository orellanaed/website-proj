/* tailwind.config.js */
const path = require("path");

// https://github.com/tailwindlabs/tailwindcss/issues/6393
// const prod = process.env.MODE === 'production'

module.exports = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
    // `${prod ? '' : 'packages/renderer/'}src/index.html`,
    // `${prod ? '' : 'packages/renderer/'}src/**/*.{vue,js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
