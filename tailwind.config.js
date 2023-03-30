/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000000",
        secondaryWhite: "#ffffff",
        neonBlue: "#0000ff",
        neonPink: "#ff33cc",
        neonOrange: "#ff9900",
        neonRed: "#ff0000",
        neonGreen: "#00ff00",
        neonPurple: "#cc0099",
        brightCyan: "#00ffff",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
