/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      backgroundImage: {
        codenightLogo: "url('/public/dist/images/CodeNightLogo.png')",
      },
      borderWidth: {
        3: "3px",
      },
      container: {
        center: true,
      },
      screens: {
        380: "380px",
      },
    },
  },
  plugins: [],
};
