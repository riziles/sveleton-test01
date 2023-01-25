import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:[".svelte",".svx"],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex()
	],
};

export default config;
