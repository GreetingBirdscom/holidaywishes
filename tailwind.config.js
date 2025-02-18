/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  options: {
    whitelist: [
    ],
    whitelistPatternsChildren: [
    ]
  }
};
