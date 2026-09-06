/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        charcoal: "#1A1D22",
        paper: "#F5F1EA",
        mist: "#767D86",
        line: "#E0D9D0",
        falaa: {
          DEFAULT: "#F15B3A",
          dark: "#D84C2A",
          light: "#F7A27F",
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
