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
    },
  },
  plugins: [
    plugin(({ addVariant, matchVariant }) => {
      // static variants
      addVariant("hover-and-focus", ["&:hover", "&:focus"]);
      addVariant("group-hover-and-focus", [
        ":merge(.group):hover &",
        ":merge(.group):focus &",
      ]);

      // dynamic variants
      matchVariant("nth-child", (value) => `&:nth-child(${value})`, {
        values: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
        },
      });
    }),
  ],
};
