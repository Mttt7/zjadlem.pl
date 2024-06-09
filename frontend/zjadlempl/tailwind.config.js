/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        retro:{
          ...require("daisyui/src/theming/themes")["retro"],
          "primary": "#f97316",
          "secondary": "#3b82f6",
          "base-100": "#f5f5f4",
        }
      }
    ]},
  plugins: [
    require('daisyui'),
  ],
}

