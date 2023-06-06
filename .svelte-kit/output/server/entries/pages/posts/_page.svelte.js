import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index3.js";
import { f as formatDate } from "../../../chunks/utils.js";
const styles = ".posts{display:flex;flex-direction:column;gap:20px;text-decoration:none;text-align:center}.main{height:100%}.post{border-radius:30px;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding:0}a{background-size:cover;background-position:center}.information{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;gap:10px;width:100%}\n";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="main"><section><ul class="posts">${each(data.posts, (post) => {
    return `<a href="${"/posts/" + escape(post.slug, true)}" class="post" style="${"background-image: url('" + escape(post.background, true) + "')"}"><li class="post"><div class="information"><a href="${"posts/" + escape(post.slug, true)}" class="title">${escape(post.title)}</a>
						<p class="date">${escape(formatDate(post.date))}</p>
					</div></li>
				
            </a>`;
  })}</ul></section></div>`;
});
export {
  Page as default
};
