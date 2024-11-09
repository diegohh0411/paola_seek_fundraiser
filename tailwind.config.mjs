/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Readex Pro", "sans-serif"]
			},
			borderRadius: {
				DEFAULT: '0.5rem'
			}
		},
	},
	plugins: [],
}
