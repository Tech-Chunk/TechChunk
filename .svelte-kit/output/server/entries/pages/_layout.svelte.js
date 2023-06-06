import { c as create_ssr_component, a as subscribe, b as add_styles, v as validate_component } from "../../chunks/index3.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const layout = "";
const Button_svelte_svelte_type_style_lang = "";
const Navi_svelte_svelte_type_style_lang = "";
const hamburger_svelte_svelte_type_style_lang = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1kba9pf.svelte-1kba9pf{margin:0;padding:0;box-sizing:border-box}nav.svelte-1kba9pf.svelte-1kba9pf{display:flex;color:white;height:50px;flex-direction:row;justify-content:center;padding:10px;align-items:center;font-size:18px;gap:15px}.logo.svelte-1kba9pf.svelte-1kba9pf{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.nav.svelte-1kba9pf.svelte-1kba9pf{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.login.svelte-1kba9pf.svelte-1kba9pf{justify-content:center;align-items:center;text-align:center;border-radius:20px}ul.svelte-1kba9pf.svelte-1kba9pf{list-style-type:none;margin:0;padding:0;overflow:hidden}li.svelte-1kba9pf.svelte-1kba9pf{float:left}li.svelte-1kba9pf a.svelte-1kba9pf{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}.list.svelte-1kba9pf button.svelte-1kba9pf,.logout.svelte-1kba9pf.svelte-1kba9pf{background-color:#1E1E1E;border:none;color:white;font-size:18px;width:150px;height:40px}.dropdown.svelte-1kba9pf.svelte-1kba9pf{background-color:#1E1E1E;border:none;cursor:pointer;outline:none;height:49px;width:60px;text-align:center}.list.svelte-1kba9pf.svelte-1kba9pf{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;align-content:center;gap:2px}.profilebttn.svelte-1kba9pf.svelte-1kba9pf,.close.svelte-1kba9pf.svelte-1kba9pf{width:40px;height:40px}.profile.svelte-1kba9pf.svelte-1kba9pf{border-radius:10px 10px 5px 5px;text-align:left}.settings.svelte-1kba9pf.svelte-1kba9pf{border-radius:5px;text-align:left}.logout.svelte-1kba9pf.svelte-1kba9pf{border-radius:5px 5px 10px 10px;text-align:left}.login.svelte-1kba9pf.svelte-1kba9pf{background-color:#1E1E1E}@media(max-width: 480px){.nav.svelte-1kba9pf.svelte-1kba9pf{display:none}.logo.svelte-1kba9pf.svelte-1kba9pf{display:none}.login.svelte-1kba9pf.svelte-1kba9pf{display:none}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  return `<nav class="svelte-1kba9pf"><ul class="logo svelte-1kba9pf"><li class="svelte-1kba9pf"><a class="logo svelte-1kba9pf" href="/">TechChunk.</a></li></ul>
    <ul class="nav svelte-1kba9pf"><li class="svelte-1kba9pf"><a href="/" class="svelte-1kba9pf">leaderboard</a></li>

        <li class="svelte-1kba9pf"><a href="/about" class="svelte-1kba9pf">About</a></li>

        <li class="svelte-1kba9pf"><a href="/donations" class="svelte-1kba9pf">Donations</a></li></ul>
    <ul class="login svelte-1kba9pf"><li class="svelte-1kba9pf">${$currentUser ? `<button class="dropdown svelte-1kba9pf">${`<img class="close svelte-1kba9pf" src="/icons/profile.svg" alt="pfp">`}</button>
                <ul class="list svelte-1kba9pf"${add_styles({
    "visibility": "hidden"
  })}><li class="svelte-1kba9pf"><button class="profile svelte-1kba9pf">Profile</button></li>
                    <li class="svelte-1kba9pf"><button class="settings svelte-1kba9pf">settings</button></li>
                    <li class="svelte-1kba9pf"><form method="POST" action="/logout" class="svelte-1kba9pf"><input type="submit" value="submit" class="logout svelte-1kba9pf"></form></li></ul>` : `<a class="login svelte-1kba9pf" href="/">Login</a>`}</li></ul>

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
