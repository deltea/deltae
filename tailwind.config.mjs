/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        jakarta: ["Plus Jakarta Sans Variable", "sans-serif"],
        comfortaa: ["Comfortaa Variable", "cursive"],
        nunito: ["Nunito Variable", "sans-serif"],
      },
      colors: {
        "background": "#ffffff",
      },
    },
	},
	plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
