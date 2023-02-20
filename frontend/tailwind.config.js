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
          "0 -1px 0px 0px rgba(255,255,255,0.2),0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        glow: "0 0 15px 10px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/site_design_2.jpg')",
        "profile-picture": "url('./assets/profile.jpg')",
        "python-gradient": "linear-gradient(to bottom, #ffe66c, #3f7dae)",
        "api-gradient": "linear-gradient(to bottom right, #00BFFF, #32CD32)",
        "scrum-gradient": "linear-gradient(to top left, #FFD700, #FFA500)",
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
