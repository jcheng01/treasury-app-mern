/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      width: {
        "80%": "80%",
      },
      backgroundColor: {
        "custom-green": "rgb(241, 245, 241)",
      },
    },
  },
  plugins: [],
};
