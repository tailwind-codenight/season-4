/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirMatn: "Vazirmatn RD",
      },
    },
    boxShadow: {
      customShadow1:
        "0 0 15px -1px rgb(0 0 0 / 0.2)",
    },
  },
  plugins: [],
};
