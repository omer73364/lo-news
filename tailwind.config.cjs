module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f5e9d4',
        'secondary': '#e0daca',
        'text-primary': '#191816',
        'text-secondary': '#958777',
        'highlight-yellow': '#f7e277',
        'highlight-pink': '#f8bda1',
      }
    },
  },
  plugins: [],
}
