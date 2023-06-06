import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const styles = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1xgrdng.svelte-1xgrdng{display:flex;color:white;height:50px;flex-direction:row;justify-content:center;padding:10px;align-items:center;font-size:18px;gap:15px}.logo.svelte-1xgrdng.svelte-1xgrdng{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.nav.svelte-1xgrdng.svelte-1xgrdng{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.login.svelte-1xgrdng.svelte-1xgrdng{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}ul.svelte-1xgrdng.svelte-1xgrdng{list-style-type:none;margin:0;padding:0;overflow:hidden}li.svelte-1xgrdng.svelte-1xgrdng{float:left}li.svelte-1xgrdng a.svelte-1xgrdng{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  return `<nav class="svelte-1xgrdng"><ul class="logo svelte-1xgrdng"><li class="svelte-1xgrdng"><a href="/" class="svelte-1xgrdng">Apple Trackr</a></li></ul>
    <ul class="nav svelte-1xgrdng"><li class="svelte-1xgrdng"><a href="/leaderboard" class="svelte-1xgrdng">leaderboard</a></li>

        <li class="svelte-1xgrdng"><a href="/about" class="svelte-1xgrdng">About</a></li>

        <li class="svelte-1xgrdng"><a href="/donations" class="svelte-1xgrdng">Donations</a></li></ul>
    <ul class="login svelte-1xgrdng"><li class="svelte-1xgrdng">${$currentUser ? `<li class="svelte-1xgrdng"><form method="POST" action="/logout"><div class="dropdown"><button type="submit" class="dropbutton">Profile</button>
                        <div class="dropdown-content"><a href="/profile" class="svelte-1xgrdng">Profile</a>
                            <a href="/settings" class="svelte-1xgrdng">Settings</a>
                            <form method="POST" action="/logout"></form></div></div></form></li>` : `<li class="svelte-1xgrdng"><a href="/login" class="svelte-1xgrdng">Login</a></li>`}</li></ul>


</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	<footer></footer>
</div>`;
});
export {
  Layout as default
};
