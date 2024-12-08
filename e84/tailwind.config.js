/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      aspectRatio: { "4to3": "4/3" },
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        customShadow1: "0 0 15px -1px rgb(0 0 0 / 0.2)",
      },
      screens: {
        450: "450px",
      },
    },
  },
  plugins: [],
};
