import { c as create_ssr_component } from "../../../chunks/index3.js";
const styles = "* .grid{display:grid;grid-template-columns:300px 620px 620px 300px;grid-template-rows:500px 400px;align-items:center}.header{grid-column:2/4;grid-row:1/2}.likedpost{display:flex}\n";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="main"><div class="grid"><div class="header"><h1>My Profile</h1>

            <div class="wrapper"><h1>Name</h1>
                <h1>@username</h1>

                <div class="buttons"></div>

                    <button>Settings</button>
                    <button>Edit Profile</button>

                    <button class="donatorbutton">Donator</button></div>

                <div class="recently liked"><div class="likedpost"></div>
                    <div class="likedpost"></div>
                    <div class="likedpost"></div></div></div></div></div>`;
});
export {
  Page as default
};
