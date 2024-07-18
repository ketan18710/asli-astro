/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      black: "#070707",
      black1: "#050505",
      black2: "#141414",
      white: "#FFFFFF",
      white1: "#FFFAF5",
      green1: "#20875E",
      "orange-50": "#fdf0e6",
      "orange-100": "#fad1b0",
      "orange-200": "#fbb8a8",
      "orange-300": "#f49d54",
      "orange-400": "#f2b933",
      "orange-500": "#ef6c00",
      "orange-600": "#d96200",
      "orange-700": "#aa4d00",
      "orange-800": "#833b00",
      "orange-900": "#642d00",
      red1: "#E43527",
      white1: "#F3EFEF",
      lightBlue1: "#EDF0F8",
      blue1: "#3A4980",
      "text-gradient1": "linear-gradient(180deg, #FF9432 8.67%, #FFD8A5 100%)",
      "banner-gradient-1":
        "linear-gradient(88.85deg, #FFEED3 27.39%, #FFD8A5 86.65%)",
    },
    fontFamily: {
      font1: ["General Sans", "sans-serif"],
    },
    backgroundPosition: {
      right: "right",
      top: "top",
      "bottom-4": " center calc(100% + 2rem) ",
      "bottom-5": " center calc(100% + 7rem) ",
      "bottom-5": " center calc(100% + 7rem) ",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        ...colors,
      },
      backgroundImage: {
        "bundle-asset-sm": "url('./images/bundle-asset-sm.png')",
      },
      boxShadow: {
        "3xl": "8px 8px 16px #292727, -8px -8px 16px #292727",
        card1: "0px 0px 12px rgba(0, 0, 0, 0.1)",
        btnShadow1:
          "1px -1px 2px rgba(112, 30, 6, 0.3), -1px 1px 2px rgba(28, 8, 2, 0.5), inset -9px -9px 18px rgba(28, 8, 2, 0.2), inset 9px 9px 18px rgba(28, 8, 2, 0.2), inset -9px 9px 18px rgba(112, 30, 6, 0.9), inset 9px -9px 23px rgba(28, 8, 2, 0.9)",
        btnShadow2:
          "-1px 1px 2px rgba(255, 102, 1, 0.3), 1px -1px 2px rgba(227, 82, 1, 0.5), inset 4px 4px 8px rgba(227, 82, 1, 0.2), inset -4px -4px 8px rgba(227, 82, 1, 0.2), inset 4px -4px 8px rgba(255, 102, 1, 0.9), inset -4px 4px 10px rgba(227, 82, 1, 0.9)",
      },
    },
  },
  plugins: [],
};
