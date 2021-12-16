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
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.stone,
			trueGray: colors.neutral,
			gray: colors.gray,
			blueGray: colors.slate,
			coolGray: colors.gray,
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
	],
}

module.exports = config
