/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif']
    },
    extend: {
      screens: {
        'ultrawide': '1921px',
        'xs': '550px',
        'tiny': '400px',
        'hoverable': {'raw': '(hover: hover)'},
      },
      animation: {
        slideshow: 'slideshow 1s ease-out',
      },
      keyframes: {
        slideshow: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
