/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#F8F1E7',
          100: '#F1E3CF',
          200: '#E3C7A0',
          300: '#D6AB71',
          400: '#C98E42',
          500: '#BB7213',
          600: '#9B5B10',
          700: '#7B4410',
          800: '#5B2E0D',
          900: '#3B1709',
        },
        brown: {
          50: '#F8F1E7',
          100: '#F1E3CF',
          200: '#E3C7A0',
          300: '#D6AB71',
          400: '#C98E42',
          500: '#BB7213',
          600: '#9B5B10',
          700: '#7B4410',
          800: '#5B2E0D',
          900: '#3B1709',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
