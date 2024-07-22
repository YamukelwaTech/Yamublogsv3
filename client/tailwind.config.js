/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cColor1: "#FDF8F0",
        cColor2: "#183a1d",
        cColor3: "#FFAB00",
        cColor4: "#DD2E18",
        cColor5: "#582C12",
      },
      height: {
        128: "52rem",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        spin: "spin 4s linear infinite",
        fadeIn: "fadeIn 1.2s ease-out",
        slideIn: "slideIn 0.9s ease-out",
      },
    },
  },
  plugins: [],
};
