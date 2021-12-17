const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Noto Sans Display', 'sans-serif'],
			serif: ['Noto Serif', 'serif'],
		},
		extend: {
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
	],
}

module.exports = config
