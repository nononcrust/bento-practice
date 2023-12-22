import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // background: colors.gray[200],
        background: "#FFFFFF",
        // content: "#FFFFFF",
        content: colors.gray[50],
        primary: "#6857FF",
        "primary-dark": "#5E4EE6",
        "content-light": colors.gray[50],
      },
      boxShadow: {
        "dark-glass":
          "inset 0 1px 2px #525154, 0 20px 25px -5px rgba(0,0,0,.8), 0 10px 10px -5px rgba(0,0,0,.9)",
        "light-glass": "5px 5px 8px #eaebec, -5px -5px 8px #ffffff",
      },
      keyframes: {
        "fade-in-up": {
          from: { transform: "translateY(80px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            },
          ),
        },
      );
    }),
  ],
};
export default config;
