/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#4839A6",
      secondary: "#5E0035",
      faintBtn: "#B5AAFC",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      xs: "480px",
      mds: "600px",
      md: "800px",
      lgss: "976px",
      lg: "1200px",
      xxl: "1300px",
    },
  },
};
export const variants = {};
export const plugins = [];
