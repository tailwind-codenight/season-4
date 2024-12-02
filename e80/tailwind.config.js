/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      aspectRatio: { "1to4": "1/4" },
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
