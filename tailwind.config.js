/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "flip-and-disappear": "flipAndDisappear 5s infinite",
      },
      keyframes: {
        flipAndDisappear: {
          "0%": { transform: "scaleX(1)", opacity: "1" },
          "40%": { transform: "scaleX(-1)", opacity: "1" },
          "50%": { transform: "scaleX(-1)", opacity: "0" },
          "51%": { transform: "scaleX(1)", opacity: "0" },
          "60%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },

  plugins: [],
};
