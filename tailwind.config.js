module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "1xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
