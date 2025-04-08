export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#0F9DF8", // blue-800
        background: "#040B1C", // amber-400
        cardbg: "#061840", // gray-600
        white: "#FBFBFB", // gray-50
        navbg: "#0A214E", // gray-900
        overlayBg: "rgba(0,0,0,0.3)", // white
      },
    },
  },
  plugins: [],
};
