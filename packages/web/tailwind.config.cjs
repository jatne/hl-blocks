const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Noto Sans Display', 'sans-serif'],
			serif: ['Noto Serif', 'serif'],
		},
		colors: {
      transparent: "transparent",
			primary: colors.cyan,
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      cyan: colors.cyan,
    },
		extend: {
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
	],
}

module.exports = config
