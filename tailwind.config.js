/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        saffron: {
           light: '#FFB347',
           default: '#FF9933',
           dark: '#FF7700',
        },
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 3s steps(8) infinite", // Infinite typing animation for "WELCOME"
        blink: "blink 0.7s step-end infinite", // Infinite cursor blink effect
      },
    },
  },
  plugins: [],
};
