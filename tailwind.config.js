/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', 
  theme: {
    extend: {
      colors: {
        primary: {
          // Wool
          50: '#e8e8e9',
          75: '#a1a0a6',
          100: '#7a7982',
          200: '#403f4c',
          300: '#191826',
          400: '#12111b',
        },
        // Antler
        secondary: {
          50: '#f9f7f5',
          75: '#e5ddd4',
          100: '#dacfc3',
          200: '#cabaa9',
          300: '#bfac97',
          400: '#86786a',
          500: '#75695c',
        },
        // Nuthatch
        tertiary: {
          50: '#f4f1ef',
          75: '#d0c4be',
          100: '#bdaba3',
          200: '#a0877c',
          300: '#8d6e61',
          400: '#634d44',
          500: '#634d44',
        },
        // Chili
        quaternary: {
          50: '#fae9eb',
          75: '#eba3ab',
          100: '#e37d88',
          200: '#d64555',
          300: '#ce1f32',
          400: '#901623',
          500: '#7e131f',
          600: '#054639' // green
        },
        // Loafer
        quinary: {
          50: '#fbfbf9',
          75: '#f0efe6',
          100: '#eae8db',
          200: '#e0decc',
          300: '#dad7c1',
          400: '#999787',
          500: '#858376',
        },
      },
      fontFamily: {
        customFont: ['"Mystic Sunlite"'],
        'serif': ['Georgia', 'serif'],
      },
    },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
}
