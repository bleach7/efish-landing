/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat, sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
