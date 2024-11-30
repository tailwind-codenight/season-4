/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      supports: {
        grid: "display: grid",
      },
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
    },
  },
  plugins: [],
};
