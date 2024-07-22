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
    },
  },
  plugins: [],
};
