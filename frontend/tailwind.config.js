/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blue: "#2ab8f8",
        gray: "#90a09b",
        "blue-gray": "#293548",
      },
      fontFamily: { quicksand: ["Quicksand", "sans-serif"] },
      boxShadow: {
        highLight:
          "0 -1px 0px 0px rgba(255,255,255,0.2),0px 10px 0px -4px rgb(0 0 0 / 0.2), 0 4px 10px 0px rgb(0 0 0 / 0.1)",
        glow: "0 0 15px 10px rgba(0, 0, 0, 0.2)",
        "highLight-text":
          "0 -1px 0px 0px rgba(255,255,255,0.2),0px 2px 0px 0px rgb(0 0 0 / 0.2), 0 4px 10px 0px rgb(0 0 0 / 0.1)",
      },
      backgroundImage: {
        "profile-picture": "url('./assets/profile.jpg')",
        linux: "url('./assets/linux.png')",
      },
      filter: {
        "saturate-50": "saturate(50%)",
      },
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
};
