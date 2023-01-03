/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    'custom-cream': {
      500: '#f7ede2',
    },
    'custom-turquoise': {
      500: '#2D99A5',
    },
    'custom-red': {
      500: '#9E5758',
    },
  },
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: colors,
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
