/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}', './projects/pinake-ui/src/**/*.{html,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/theming/themes')['black'],
					'--btn-text-case': 'capitalize',
					accent : '#0ad3ce',
				},
			},
		],
	},
};
