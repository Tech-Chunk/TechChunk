import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Second",
  "description": "Second post.",
  "date": "2023-4-16",
  "categories": ["sveltekit", "svelte"],
  "author": "cloudy",
  "published": true
};
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Svelte</h2>
<p>Media inside the <strong>static</strong> folder is served from <code>/</code>.</p>
<p><img src="favicon.png" alt="Svelte"></p>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Second_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
