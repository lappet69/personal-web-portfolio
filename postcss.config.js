module.exports = {
  plugins: {
    tailwindcss: [
      "./node_modules/flowbite-react/**/*.js",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./public/**/*.html",
    ],
    autoprefixer: {},
  },
};
