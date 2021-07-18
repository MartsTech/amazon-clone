const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "1xl": "1440px",
      },
      width: {
        almost: "calc(100% - 4rem)",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "550px",
      semi: "880px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
