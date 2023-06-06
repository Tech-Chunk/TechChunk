import { c as create_ssr_component } from "../../../chunks/index3.js";
import "devalue";
import "../../../chunks/pocketbase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form method="POST" class="card"><h1>Sign Up</h1>
    <div class="signup"><input type="email" name="email" placeholder="Email" class="input">
        <input type="password" name="password" placeholder="Password" class="input">
        <input type="password" name="passwordConfirm" placeholder="Confirm Password" class="input">
        <button type="submit" class="button">Sign Up</button></div></form>`;
});
export {
  Page as default
};
