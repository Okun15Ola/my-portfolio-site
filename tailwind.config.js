/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a6a6a6",
        "background-light": "#f7f7f7",
        "background-dark": "#191919",
        secondary: "#238636",
        brandOffwhite: "#C7C7C7",
        brandGray: "#484848",
        amber: {
          primary: "#f2a60d",
          dark: "#120e07",
          body: "#0c0a06",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "monospace"],
        bebas: "Bebas Neue"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
    },
  },
  plugins: [],
};

