import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../chunks/index3.js";
import { f as formatDate } from "../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="main">${each(data.posts.slice(0, 1), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="Latestpost"><div class="Latestpost"><div class="information"><h2>${escape(post.title)}</h2>
		    <div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			  <h3>${escape(post.author)}</h3></div>
		  </div></div>
	  </a>`;
  })}
  
  
    <div class="post2">${each(data.posts.slice(1, 2), (post) => {
    return `<a${add_attribute("href", post.slug, 0)} class="post2"><div class="information"><a href="${"posts/" + escape(post.slug, true)}"><h2>${escape(post.title)}</h2></a>
		  <div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
		    <h3>${escape(post.author)}</h3>
		  </div></div>
	 </a>`;
  })}</div>
	
	<div class="post3">${each(data.posts.slice(2, 3), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="post3"><div class="information"><h2>${escape(post.title)}</h2>
			<div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			  <h3>${escape(post.author)}</h3>
			</div></div>
		</a>`;
  })}</div></div>`;
});
export {
  Page as default
};
