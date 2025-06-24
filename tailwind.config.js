/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'elza': ['elza', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        tuna: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4dae2',
          300: '#afbbc8',
          400: '#8396a9',
          500: '#65788f',
          600: '#516176',
          700: '#434f61',
          800: '#3a4352',
          900: '#343b46',
          950: '#23272e',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}