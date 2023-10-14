/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.violet,
          DEFAULT: colors.violet[500],
        },
        secondary: {
          ...colors.gray,
          DEFAULT: colors.gray[500],
        },
      },
    },
  },
  plugins: [],
};
