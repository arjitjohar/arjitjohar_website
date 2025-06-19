/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#F5F5DC', // A light beige, like parchment
        'content-dark': '#36454F',    // Charcoal grey for text
        'primary-green': '#556B2F',   // Dark olive green
        'primary-brown': '#8B4513',   // Saddle brown
      },
    },
  },
  plugins: [],
}
