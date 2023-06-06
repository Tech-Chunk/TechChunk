import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { f as formatDate } from "../../../../chunks/utils.js";
const styles = ".grid{display:grid;grid-template-columns:300px 620px 620px 300px;grid-template-rows:500px 400px}hgroup{font-size:24px;grid-column:2/4}.title{margin:0}.subtitle{display:flex;flex-direction:row;gap:10px;font-size:18px}.author{font-weight:500}.tags{display:flex;flex-direction:row;gap:10px;align-items:center;font-size:16px}.surface-4{background-color:#1e1e1e;padding:10px;border-radius:10px}img{width:100%;height:100%;object-fit:cover;border-radius:20px}.LorD{display:flex;flex-direction:row;gap:20px;align-items:center;font-size:16px;margin:0;padding:0}.LorD button{background-color:#1e1e1e;color:#fff;padding:10px;font-size:20px;border:0;border-radius:10px;transition:all .3s ease-in-out}.LorD .dislike:hover{background-color:#fd0000}.LorD .like:hover{background-color:#03b703}\n";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""}

<article>
  <div class="grid"><hgroup><h1 class="title">${escape(data.meta.title)}</h1>
		<div class="subtitle"><p class="date">${escape(formatDate(data.meta.date))}</p>
			<p class="author">${escape(data.meta.author)}</p>
			
			<div class="tags">${each(data.meta.categories, (category) => {
    return `<span class="surface-4">#${escape(category)}</span>`;
  })}</div></div>
		<div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>

		
		<div class="review"><h1>Did you like this post?</h1>
			<div class="LorD"><button class="like">Like 👍</button>
				<button class="dislike">Dislike 👎</button></div></div></hgroup></div></article>`;
});
export {
  Page as default
};
