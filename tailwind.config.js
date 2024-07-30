module.exports = {
  mode: 'jit',
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    fontFamily: {
      'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['Playfair Display', 'ui-serif', 'Georgia']
    },
    extend: {},
  },
  daisyui: {
    themes: ["lofi", "black", "cupcake"],
  },
  plugins: [
    require('daisyui'),
  ],
}
