/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121212",
        primary: "#ffffff",
        secondary: "#a3a3a3",
        accent: "#3b82f6", // Fallback blue, will use gradients mostly
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'prisma-gradient': 'linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)',
        'rainbow': 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)',
      }
    },
  },
  plugins: [],
}
