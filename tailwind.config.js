/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/pages/*.html",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        blue: {
          DEFAULT: "#388FF3",
          100: "#FFFFFF"
        },
        grey: {
          4: "#EAEDF0",
        },
      },
      boxShadow: {
        category: "0px 4px 16px 0px rgba(0, 0, 0, 0.02)",
        "category-hover": "0px 4px 16px 0px rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
}