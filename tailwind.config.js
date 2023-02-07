const { transparent } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class", // to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy
  content: ["./src/**/*.{html,js,jsx}", "./src/index.html"],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
      xxl: '1700px',
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '540px',
        sm: '720px',
        md: '960px',
        lg: '1140px',
        xl: '1200px',
      },
    },

    fontFamily: {
      display: ['Libre Bodoni', "serif"],
      body: ["Source Sans Pro", "sans-serif"],
    },

    fontSize: {
      semiLarge: "20px",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      md: "16px",
      base: "1rem",
      "base-lg": "1.0625rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },

    colors: {
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      transparent: transparent,
      black: "#000000",
      primary: "#FC6136",
      secondary: "#67568C", 
      tertery: "#FBDD74",
      white_light: "#F5F6FF",
    },

    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      dropShadow: {
        '3xl': '0 30px 90px rgba(252, 97, 54, 0.45)',
        '4xl': '0 20px 60px rgba(0, 0, 0, 0.17)',
        '5xl': '0 30px 60px rgba(252, 97, 54, 0.35)',
      }
    },
    
  },
  plugins: [],
};