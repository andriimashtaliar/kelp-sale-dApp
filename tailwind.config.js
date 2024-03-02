/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      ceter: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "4rem",
        "3xl": "8rem",
        "4xl": "10rem",
      },
    },
    extend: {
      screens: {
        "2xl": "1536px",
        "3xl": "2000px",
        "4xl": "2500px",
      },
      fontFamily: {
        poppins: ["var(--poppins-font)", ...fontFamily.sans],
        inter: ["var(--inter-font)"],
        monument: ["var(--font-monument)"],
      },
      boxShadow: {
        "3xl": "0px 4px 24px 0px rgba(226, 232, 240, 0.7)",
      },
      colors: {
        primary: {
          50: "#e3f7ea",
          100: "#bdeaca",
          200: "#90dca9",
          300: "#5acf85",
          400: "#1cc46a",
          500: "#00b94f",
          600: "#00a945",
          700: "#009739",
          800: "#00862d",
          900: "#006618",
        },
      },
    },
  },
  plugins: [],
};
