/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Segoe UI'", 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1D4ED8',
          accent: '#0EA5E9',
        },
      },
      boxShadow: {
        card: '0 10px 25px -15px rgba(15, 23, 42, 0.3)',
      },
    },
  },
  plugins: [],
};
