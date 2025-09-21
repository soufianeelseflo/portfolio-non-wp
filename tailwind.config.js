/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
      },
      colors: {
        brand: {
          50:  "#f4f7ff",
          100: "#e8efff",
          200: "#cddcff",
          300: "#a6c0ff",
          400: "#6e98ff",
          500: "#3f72ff",
          600: "#234fff",
          700: "#173be6",
          800: "#142fb8",
          900: "#142a8f"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.2)"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
