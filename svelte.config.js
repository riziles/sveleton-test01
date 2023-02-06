import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    prerender: {
      handleHttpError: 'ignore'
		},
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
