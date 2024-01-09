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
        primary: "#f3f2c0", // yellow
        secondary: "#8d3478", // pink
        secondaryHover: "#f3f2c0", // pink darker
        background: "#171c49",
        tertiary: "#191E4D", // navy
        terinatyHover: "#1B2156",
        font: "#ffffff",
        info: "#f3f2c0", // yellow
        success: "#049462",
        warning: "#aba304",
        error: "#c21111",
        danger: "#c21111",
        current: "currentColor",
      },
      boxShadow: {
        gold: "0px 0px 15px 2px rgba(247,239,184,0.75)",
      },
    },
  },
  plugins: [],
};
