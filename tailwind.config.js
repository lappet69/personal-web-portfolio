/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/asset/logo_transparent.png')",
        "bg-1": "url('/asset/bg-1.png')",
        "bg-2": "url('/asset/bg-2.jpg')",
        profile:
          "url('https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/profile-picture/5bdc782ce7b6f61aee193c2ed59952df.jpg')",
      },
      colors: {
        cardOverlay: "rgba(0,0,0, 0.3)",
        darkGrey: "#2C2C2C",
        darkerGrey: "#1C1C1C",
        veryDarkGrey: "#0D0D0D",
      },
    },
  },

  plugins: [
    require("@kamona/tailwindcss-perspective"),
    require("flowbite/plugin"),
  ],
};
