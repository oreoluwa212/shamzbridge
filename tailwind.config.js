/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#d3826e",
        black: "#070603",
        gold: "#072742",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        xs: "340px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};