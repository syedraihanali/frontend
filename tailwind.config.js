/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Segoe UI'", 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1B2A3D',
          accent: '#8C95A6',
          secondary: '#B8A47A',
          surface: '#F7F7F5',
          darkSurface: '#E9ECEF',
        },
      },
      boxShadow: {
        card: '0 18px 40px -20px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
