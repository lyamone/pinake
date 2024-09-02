module.exports = {
	content: ['./projects/pinake-ui/src/**/*.{html,ts,css,scss}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/theming/themes')['black'],
				},
			},
		],
	},
};
