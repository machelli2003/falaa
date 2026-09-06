/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16151B",
        charcoal: "#211F2A",
        paper: "#F8F3F0",
        mist: "#6E6A7A",
        line: "#E7DDE8",
        brand: {
          purple: "#5D39F4",
          pink: "#EC4F7D",
          gold: "#F4C76B",
          plum: "#372B4F",
          blush: "#FCE9F0",
        },
        falaa: {
          DEFAULT: "#EC4F7D",
          dark: "#C83C62",
          light: "#F9B4C7",
          accent: "#F4C76B",
          purple: "#5D39F4",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
}
