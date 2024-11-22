/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        highlight: "#FF3131",
        primary: "",
        secondary: "",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: ["640px", "768px", "1024px", "1200px"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
