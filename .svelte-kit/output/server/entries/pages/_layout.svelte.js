import { c as create_ssr_component, a as subscribe, b as add_styles, v as validate_component } from "../../chunks/index3.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const layout = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-qvhs1x.svelte-qvhs1x{display:flex;color:white;height:50px;flex-direction:row;justify-content:center;padding:10px;align-items:center;font-size:18px;gap:15px}.logo.svelte-qvhs1x.svelte-qvhs1x{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.nav.svelte-qvhs1x.svelte-qvhs1x{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.login.svelte-qvhs1x.svelte-qvhs1x{justify-content:center;align-items:center;text-align:center;border-radius:20px}ul.svelte-qvhs1x.svelte-qvhs1x{list-style-type:none;margin:0;padding:0;overflow:hidden}li.svelte-qvhs1x.svelte-qvhs1x{float:left}li.svelte-qvhs1x a.svelte-qvhs1x{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}.list.svelte-qvhs1x button.svelte-qvhs1x,.logout.svelte-qvhs1x.svelte-qvhs1x{background-color:#1E1E1E;border:none;color:white;font-size:18px;width:150px;height:40px}.dropdown.svelte-qvhs1x.svelte-qvhs1x{background-color:#1E1E1E;border:none;cursor:pointer;outline:none;height:49px;width:60px;text-align:center}.list.svelte-qvhs1x.svelte-qvhs1x{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;align-content:center;gap:2px}.profilebttn.svelte-qvhs1x.svelte-qvhs1x,.close.svelte-qvhs1x.svelte-qvhs1x{width:40px;height:40px}.profile.svelte-qvhs1x.svelte-qvhs1x{border-radius:10px 10px 5px 5px;text-align:left}.settings.svelte-qvhs1x.svelte-qvhs1x{border-radius:5px;text-align:left}.logout.svelte-qvhs1x.svelte-qvhs1x{border-radius:5px 5px 10px 10px;text-align:left}.login.svelte-qvhs1x.svelte-qvhs1x{background-color:#1E1E1E}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  return `<nav class="svelte-qvhs1x"><ul class="logo svelte-qvhs1x"><li class="svelte-qvhs1x"><a class="logo svelte-qvhs1x" href="/">Willy Chang.</a></li></ul>
    <ul class="nav svelte-qvhs1x"><li class="svelte-qvhs1x"><a href="/" class="svelte-qvhs1x">leaderboard</a></li>

        <li class="svelte-qvhs1x"><a href="/about" class="svelte-qvhs1x">About</a></li>

        <li class="svelte-qvhs1x"><a href="/donations" class="svelte-qvhs1x">Donations</a></li></ul>
    <ul class="login svelte-qvhs1x"><li class="svelte-qvhs1x">${$currentUser ? `<button class="dropdown svelte-qvhs1x">${`<img class="close svelte-qvhs1x" src="/icons/profile.svg" alt="pfp">`}</button>
                <ul class="list svelte-qvhs1x"${add_styles({
    "visibility": "hidden"
  })}><li class="svelte-qvhs1x"><button class="profile svelte-qvhs1x">Profile</button></li>
                    <li class="svelte-qvhs1x"><button class="settings svelte-qvhs1x">settings</button></li>
                    <li class="svelte-qvhs1x"><form method="POST" action="/logout"><input type="submit" value="submit" class="logout svelte-qvhs1x"></form></li></ul>` : `<a class="login svelte-qvhs1x" href="/">Login</a>`}</li></ul>


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
