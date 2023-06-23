import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const layout = "";
const hamburger_svelte_svelte_type_style_lang = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-h9a8zc.svelte-h9a8zc{margin:0;padding:0;box-sizing:border-box}nav.svelte-h9a8zc.svelte-h9a8zc{display:flex;color:white;height:50px;flex-direction:row;justify-content:center;padding:10px;align-items:center;font-size:18px;gap:15px;margin:20px}.hamburger.svelte-h9a8zc.svelte-h9a8zc{display:none;cursor:pointer}.bar.svelte-h9a8zc.svelte-h9a8zc{display:block;width:25px;height:3px;margin:5px auto;transition:all 0.3s ease-in-out;background-color:white}.logo.svelte-h9a8zc.svelte-h9a8zc{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.nav.svelte-h9a8zc.svelte-h9a8zc{background-color:#1E1E1E;justify-content:center;align-items:center;text-align:center;border-radius:20px}.login.svelte-h9a8zc.svelte-h9a8zc{justify-content:center;align-items:center;text-align:center;border-radius:20px}ul.svelte-h9a8zc.svelte-h9a8zc{list-style-type:none;margin:0;padding:0;overflow:hidden}li.svelte-h9a8zc.svelte-h9a8zc{float:left}li.svelte-h9a8zc a.svelte-h9a8zc{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}.list.svelte-h9a8zc button.svelte-h9a8zc,.logout.svelte-h9a8zc.svelte-h9a8zc{background-color:#1E1E1E;border:none;color:white;font-size:18px;width:150px;height:40px}.dropdown.svelte-h9a8zc.svelte-h9a8zc{background-color:#1E1E1E;border:none;cursor:pointer;outline:none;height:49px;width:60px;text-align:center}.list.svelte-h9a8zc.svelte-h9a8zc{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;align-content:center;gap:2px}.profilebttn.svelte-h9a8zc.svelte-h9a8zc,.close.svelte-h9a8zc.svelte-h9a8zc{width:40px;height:40px}.profile.svelte-h9a8zc.svelte-h9a8zc{border-radius:10px 10px 5px 5px;text-align:left}.settings.svelte-h9a8zc.svelte-h9a8zc{border-radius:5px;text-align:left}.logout.svelte-h9a8zc.svelte-h9a8zc{border-radius:5px 5px 10px 10px;text-align:left}.login.svelte-h9a8zc.svelte-h9a8zc{background-color:#1E1E1E}@media(max-width: 480px){.hamburger.svelte-h9a8zc.svelte-h9a8zc{display:block}.nav.svelte-h9a8zc.svelte-h9a8zc{display:none}.logo.svelte-h9a8zc.svelte-h9a8zc{display:none}.login.svelte-h9a8zc.svelte-h9a8zc{display:none}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  return `<nav class="svelte-h9a8zc"><ul class="logo svelte-h9a8zc"><li class="svelte-h9a8zc"><a class="logo svelte-h9a8zc" href="/">TechChunk.</a></li></ul>
    <ul class="nav svelte-h9a8zc"><li class="svelte-h9a8zc"><a href="/" class="svelte-h9a8zc">leaderboard</a></li>
        <li class="svelte-h9a8zc"><a href="/about" class="svelte-h9a8zc">About</a></li>
        <li class="svelte-h9a8zc"><a href="/donations" class="svelte-h9a8zc">Donations</a></li></ul>
    <ul class="login svelte-h9a8zc"><li class="svelte-h9a8zc">${$currentUser ? `<button class="dropdown svelte-h9a8zc">${`<img class="close svelte-h9a8zc" src="/icons/profile.svg" alt="pfp">`}</button>
            <ul class="${["list svelte-h9a8zc", ""].join(" ").trim()}"><li class="svelte-h9a8zc"><button class="profile svelte-h9a8zc">Profile</button></li>
                <li class="svelte-h9a8zc"><button class="settings svelte-h9a8zc">Settings</button></li>
                <li class="svelte-h9a8zc"><form method="POST" action="/logout" class="svelte-h9a8zc"><input type="submit" value="Logout" class="logout svelte-h9a8zc"></form></li></ul>` : `<a class="login svelte-h9a8zc" href="/">Login</a>`}</li></ul>
    <div class="hamburger svelte-h9a8zc"><div class="bar svelte-h9a8zc"></div>
        <div class="bar svelte-h9a8zc"></div>
        <div class="bar svelte-h9a8zc"></div></div>
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
