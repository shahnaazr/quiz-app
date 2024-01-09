/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      header: ["Lilita One", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#f3f2c0",
        secondary: "#8d3478",
        secondaryHover: "#C851AC",
        accent: "#171c49",
        tertiary: "#191E4D",
        terinatyHover: "#121639",
        font: "#ffffff",
        info: "#f3f2c0",
        success: "#049462",
        warning: "#aba304",
        error: "#c21111",
        danger: "#c21111",
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
