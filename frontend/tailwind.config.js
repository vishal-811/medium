/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
    keyframes: {
        shine: {
          '0%': { transform: 'translateX(0%)', opacity: 0 },
          '50%': { transform: 'translateX(50%)', opacity: 1 },
          '100%': { transform: 'translateX(90%)', opacity: 0 },
        },
      },
     
      animation: {
        shine: 'shine 3s linear infinite',

      },
    },
  },
  plugins: [],
}