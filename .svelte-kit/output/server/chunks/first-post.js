import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Post 1",
  "description": "First post.",
  "date": "2023-4-18",
  "categories": ["sveltekit", "svelte"],
  "published": true,
  "author": "cloudy",
  "background": "/headset.jpeg"
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Markdown</h2>
<p>Hey friends! 👋</p>`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};
