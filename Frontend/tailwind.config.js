/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 fontFamily: {
        poppins: ['Poppins', 'sans-serif',"Inter"],
 },

 keyframes: {
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInUp: 'fadeInUp 1s ease-out',
  },

    },
  },
  plugins: [],
}