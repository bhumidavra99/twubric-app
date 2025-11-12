/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB8844", 
        secondary: "#ADAEB2",
      },
    },
  },
  plugins: [],
};
