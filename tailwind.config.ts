import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      color1: "#141619",
      color2: "#FFFFFF",
      color3: "#0f172a",
      color4: "#4b5563",
      color5: "#BCBCBC",
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
export default config;
