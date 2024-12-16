const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"campaign"', 'sans-serif'],
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
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: "dark", // extends the default dark theme
          colors: {
            primary: {
              DEFAULT: "#61FBB6",
              foreground: "#025b33",
              dark: "#2ffa9f",
            },
            secondary: {
              DEFAULT: "#fc93c2",
              foreground: "#5b022a",
            },
            copy: {
              DEFAULT: "#9faaac", 

            },
            border: "#295642",
            background: "#171c1a",
            foreground: "#fbfbfb",
            content1: "#222a27",
            content2: "#2C3334",
            default: {
              DEFAULT: "#cbe6da",
              foreground: "#fbfbfb",
            }
          },
        },
      },
    }),
    require("@tailwindcss/typography")
  ],
};
