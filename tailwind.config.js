/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      borderColor: {
        headerBorder: "#EAEEF3",
      },
      colors: {
        footerColor: "#13408B",
      },
      boxShadow: {
        headerShadow: "0 4px 10px rgb(25 25 25 / 20%)",
        footerShadow: "0px 2px 10px 0px rgba(0,0,0, 0.75) inset",
      },
    },
  },
  plugins: [],
};
