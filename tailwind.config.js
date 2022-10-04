/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(25,97%,53%)",
        "neutral-white": "hsl(0,0%,100%)",
        "neutral-light-grey": "hsl(217,12%,63%)",
        "neutral-medium-grey": "hsl(216,12%,54%)",
        "neutral-dark-blue": "hsl(213, 19%, 18%)",
        "neutral-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
