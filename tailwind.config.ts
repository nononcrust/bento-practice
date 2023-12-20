import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
        "2xl": "900px",
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
    },
  },
  plugins: [],
};
export default config;
