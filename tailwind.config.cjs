const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
     "./src/**/*.svelte",
     "./index.html"
    ],
    enabled: production // disable purge in dev
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto']
      },
      colors: {
        dark: "#1a1b1e",
        input: "#25262b"
      }
    }
  }
};