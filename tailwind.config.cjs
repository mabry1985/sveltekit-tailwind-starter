const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}', './src/**/*.css'],
	// darkMode: 'class',
	theme: {
    fontFamily: {
      'heading': ['Titillium Web', 'sans-serif'],
      'body': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
		extend: {
			colors: {
        'oddball-black': '#181716',
        'oddball-dark-gray': '#2b2b2b',
        'oddball-mid-gray': '#393433',
        'oddball-gray': '#453f3d',
        'oddball-light-gray': '#57504d',
        'oddball-white': '#FAF9F6',
			},
		},
	},
	variants: {
	},
	plugins: [],
};

module.exports = config;
