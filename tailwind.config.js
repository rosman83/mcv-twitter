module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        backgroundImage: {
         'main': "url('https://files.catbox.moe/2h33j3.png')",
        }
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
