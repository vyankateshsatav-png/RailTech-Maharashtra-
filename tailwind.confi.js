/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        railway: {
          orange: '#ea580c',
          dark: '#0f172a',
          slate: '#1e293b',
        }
      },
    },
  },
  plugins: [],
}
