module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-main': 'var(--primary-main)',
        'secondary-main': 'var(--secondary-main)',
        'secondary-light': 'var(--secondary-light)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
