/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dot: "#5628EE",
        path: "#2F3545",
        background: "#F5F9FF",
        font:"#FF6969"
      },
    },
  },
  plugins: [],
};
