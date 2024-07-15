/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        155: "155px",
      },
      screens: {
        "custom-lg": "1326px",
        "custom-form": "1325px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,140,0,1) 0%, rgba(255,200,100,1) 50%, rgba(255,140,0,1) 100%)",
        custom: "url('blk.jpg')",
        stars: "url('stars.jpg')",
        basic: "url('basic.png')",
      },
      fontFamily: {
        aeonik: ["Aeonik TRIAL", "sans-serif"],
      },
    },
  },
  plugins: [],
};
