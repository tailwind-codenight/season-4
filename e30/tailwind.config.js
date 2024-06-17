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
        md: "800px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
