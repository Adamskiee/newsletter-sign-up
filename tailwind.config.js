/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        desktop: "71.1875rem"
      },
      colors: {
        "red": "var(--red)",
        "blue-800": "var(--blue-800)",
        "blue-700": "var(--blue-700)",
        "grey": "var(--grey)",
        "white": "var(--white)"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

