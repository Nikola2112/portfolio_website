/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        neon: '#0FF0FC',
        dark: '#0B0C10',
      },
    },
  },
  plugins: [],
};
