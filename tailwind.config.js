/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "",
      secondary: "",
    },
    screems: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
    },
    extend: {
      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      boxShadow: {},
      backgroundImage: {},
    },
  },
  plugins: [],
};
