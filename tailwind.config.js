/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a181b',
        },
        cyan: {
          DEFAULT: '#3E8989',
        },
        aquamarine: {
          DEFAULT: '#2CDA9D',
        },
        lime: {
          DEFAULT: '#05F140',
        },
        bone: {
          DEFAULT: '#edede9',
        },
      },
    },
  },
  plugins: [],
}
