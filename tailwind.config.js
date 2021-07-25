module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          default: '#1b1c1d',
        },
        primary: {
          100: '#E0F2ED',
          500: '#458E7D',
          700: '#057586',
        },
        gray: {
          100: '#f7f7f8',
          300: '#b7b9bb',
          500: '#74767a',
          700: '#272729',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        md: '-1.2px -1.2px 2.2px hsl(0deg 0% 100% / 95%), 1.2px 1.2px 3.2px rgb(28 64 128 / 15%)',
        lg: '-1.4px -1.4px 2.6px hsl(0deg 0% 100% / 95%), 1.6px 1.6px 3.6px rgb(28 64 128 / 15%)',
        xl: '-3px -3px 4px hsl(0deg 0% 100% / 95%), 2px 2px 6px rgb(28 64 128 / 15%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
