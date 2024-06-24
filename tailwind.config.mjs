/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        jakarta: ["Plus Jakarta Sans Variable", "sans-serif"],
        comfortaa: ["Comfortaa Variable", "cursive"],
      },
      colors: {
        "background": "#0F1112",
        "white": "#E6E6E6",
      }
    },
	},
	plugins: [require("tailwindcss-animate")],
}
