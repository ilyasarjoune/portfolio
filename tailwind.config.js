/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#64FFDA', // Teal/cyan primary color
        primary: '#0A192F', // Dark blue background
      },
    },
  },
  plugins: [],
}
