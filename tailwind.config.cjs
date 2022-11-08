/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        '75v': '75vh',
      },
      animation: {
        slideshow: 'slideshow 1s ease-out',
        spinonce: 'spin 1s linear once',
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
  plugins: [],
}
