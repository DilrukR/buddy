/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shapeBase: "#ef233c",
        colorSecondory: "#FA4A0C",
        bgDarkWhite: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
