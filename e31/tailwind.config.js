/** @type {import('tailwindcss').Config} */

// plugins imports
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      screens: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
