/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin':{
          '100%': {
            transform: 'rotate(-360deg)',
          }
        },
        'loop-scroll-left': {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
        'loop-scroll-right': {
          from: {transform: "translateX(-100%)"},
          to: {transform: "translateX(0%)"}
        }
      },
      animation: {
        'loop-scroll-left':'loop-scroll-left 40s linear infinite',
        'loop-scroll-right':'loop-scroll-right 40s linear infinite',
        'border-spin': 'border-spin 4s linear infinite'
      }
    },
  },
  plugins: [],
}