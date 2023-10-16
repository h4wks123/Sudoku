/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        tier1: "#32343E",
        tier2: "#478D73",
        tier3: "#5BA95D",
        tier4: "#404C54",
      },
      textColor: {
        tier1: "#32343E",
        tier2: "#478D73",
        tier3: "#5BA95D",
        tier4: "#404C54",
      },
    },
  },
  plugins: [],
};
