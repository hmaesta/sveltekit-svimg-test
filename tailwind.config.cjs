const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('autoprefixer'),
	],
	darkMode: false,
	theme: {
		screens: {
			sm: "500px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		container: {
			center: true,
			padding: "16px",
		},
	},
	variants: {
	},
	corePlugins: {
		fontSmoothing: true,
	},
};

module.exports = config;
