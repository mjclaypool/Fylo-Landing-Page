/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-foot": "hsl(216, 53%, 9%)",
        "dark-blue-test": "hsl(219, 30%, 18%)",
        "cyan-accent": "hsl(176, 68%, 64%)",
        "blue-accent": "hsl(198, 60%, 50%)",
        "red-accent": "hsl(0, 100%, 63%)",
        "white": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

