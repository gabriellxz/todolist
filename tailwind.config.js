/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackTodo: {
          100: "#0D0D0D"
        },
        grayTodo: {
          100: "#191919",
          200: "#262626",
          300: "#808080"
        },
        blueTodo: {
          100: "#1E6F9F",
          200: "#4EA8DE"
        },
        purpleTodo: {
          100: "#8284FA"
        }
      }
    },
  },
  plugins: [],
}