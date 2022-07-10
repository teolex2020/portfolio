/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mm: "440px",
      sm: "480px",
      lm: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      boxShadow: {
        "1xl": "4px -1px 1px -1px #000000",
      },
    },
  },
  plugins: [],
};
