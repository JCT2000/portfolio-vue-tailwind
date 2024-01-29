/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '475px', 
      sm: "641px", // => @media (min-width: 640px) { ... }
      md: "769px", // => @media (min-width: 768px) { ... }
      lg: "1025px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
     xxl: "1536px", // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        "yana-pink": "#ff004f",
        "yana-pink-dark": "#f60250",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
