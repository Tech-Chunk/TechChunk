import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../chunks/index3.js";
import { f as formatDate } from "../../chunks/utils.js";
const styles = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".footer.svelte-rz3sn6{justify-content:center;align-items:center;text-align:center;padding:50px}.readmore.svelte-rz3sn6{border-radius:12px;padding:10px 20px;border:0;text-align:center;align-items:center;justify-content:center;font-size:18px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body><div class="main">${each(data.posts.slice(0, 1), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="Latestpost" style="${"background-image: url('" + escape(post.background, true) + "')"}"><div class="latestpost"><div class="information"><h2>${escape(post.title)}</h2>
		  <div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			<h3>${escape(post.author)}</h3></div>
		</div></div>

	  
	</a>`;
  })}
  
  	
	${each(data.posts.slice(1, 2), (post) => {
    return `<a${add_attribute("href", post.slug, 0)} class="post2" style="${"background-image: url('" + escape(post.background, true) + "')"}"><div class="post2"><div class="information"><a href="${"posts/" + escape(post.slug, true)}"><h2>${escape(post.title)}</h2></a>
			<div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
				<h3>${escape(post.author)}</h3></div>
			</div></div>
	 </a>`;
  })}
	
	${each(data.posts.slice(2, 3), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="post3" style="${"background-image: url('" + escape(post.background, true) + "')"}"><div class="post3"><div class="information"><h2>${escape(post.title)}</h2>
			<div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			  <h3>${escape(post.author)}</h3></div>
		  </div></div>
		


	</a>`;
  })}

	${each(data.posts.slice(3, 4), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="post4" style="${"background-image: url('" + escape(post.background, true) + "')"}"><div class="post3"><div class="information"><h2>${escape(post.title)}</h2>
			<div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			  <h3>${escape(post.author)}</h3></div>
		  </div></div>
		


	</a>`;
  })}

	${each(data.posts.slice(4, 5), (post) => {
    return `<a href="${"posts/" + escape(post.slug, true)}" class="post5" style="${"background-image: url('" + escape(post.background, true) + "')"}"><div class="post3"><div class="information"><h2>${escape(post.title)}</h2>
			<div class="info"><h3 class="date">${escape(formatDate(post.date))}</h3>
			  <h3>${escape(post.author)}</h3></div>
		  </div></div>
		


	</a>`;
  })}</div>
<div class="footer svelte-rz3sn6"><button class="readmore svelte-rz3sn6">Read More</button></div>
</body>`;
});
export {
  Page as default
};
