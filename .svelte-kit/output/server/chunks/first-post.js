import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "First post",
  "description": "First post.",
  "date": "2023-4-18",
  "categories": ["sveltekit", "svelte"],
  "published": true,
  "author": "cloudy"
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Markdown</h2>
<p>Hey friends! 👋</p>
<pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hey </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">! 👋</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
