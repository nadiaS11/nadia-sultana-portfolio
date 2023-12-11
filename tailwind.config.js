/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#003e1f",
        dulche: "#F5DA8F",
        lightish: "#E3CC8C",
        off: "#fefae0",
      },
    },
  },
  plugins: [],
};

