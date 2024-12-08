/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        page: "calc(100svh - 4rem)",
      },
      minHeight: {
        page: "calc(100svh - 4rem)",
      },
      maxHeight: {
        page: "calc(100svh - 4rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
