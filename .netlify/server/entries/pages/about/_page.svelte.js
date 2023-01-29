import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article class="${"prose lg:p-8 dark:prose-invert "}"><h1>Disclaimer</h1>
	<p>There is no original work here, just standing on the shoulders of giants.</p>
	<section class="${"flex space-x-2"}"><a class="${"btn btn-filled-primary"}" href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noreferrer"}">SvelteKit</a>
		<a class="${"btn btn-filled-secondary"}" href="${"https://tailwindcss.com/"}" target="${"_blank"}" rel="${"noreferrer"}">Tailwind</a>
		<a class="${"btn btn-filled-tertiary"}" href="${"https://github.com/"}" target="${"_blank"}" rel="${"noreferrer"}">GitHub</a></section></article>`;
});
export {
  Page as default
};
