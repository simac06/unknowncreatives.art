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
        sans: ['"gamay-variable"', 'sans-serif'],
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
              DEFAULT: "#51e5ff",
              foreground: "#004551",
            },
            secondary: {
              DEFAULT: "#b584ff",
              foreground: "#ffffff",
            },
            copy: {
              DEFAULT: "#9faaac", 

            },
            background: "#181b1b",
            foreground: "#fbfbfb",
            content1: "#232829",
            content2: "#2C3334",
            default: {
              DEFAULT: "#495355",
              foreground: "#fbfbfb",
            }
          },
        },
      },
    }),
    require("@tailwindcss/typography")
  ],
};
