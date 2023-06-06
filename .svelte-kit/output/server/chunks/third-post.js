import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "post3",
  "description": "third post.",
  "date": "2021-4-19",
  "categories": ["WWDC", "VR"],
  "author": "ChomBot",
  "published": true,
  "background": "/headset.jpeg"
};
const Third_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><img src="/headset.jpeg" alt="VR Headset"></p>
<p>Apple is working on a powerful headset for both AR and VR. The headset is expected to be released in 2023</p>
<p>Our take: Apple will release this in 2023</p>`;
});
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Third_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_4 as _
};
