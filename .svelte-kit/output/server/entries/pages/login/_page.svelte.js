import { c as create_ssr_component } from "../../../chunks/index3.js";
import "devalue";
import "../../../chunks/pocketbase.js";
const styles = ".grid{display:grid;grid-template-columns:300px 620px 620px 300px;grid-template-rows:500px 400px;font-size:16px}.login{grid-column:2/4;display:flex;flex-direction:column;font-size:16px}.input{padding:10px;border-radius:10px;border:0}.button{background-color:#1e1e1e;color:#fff;padding:10px 20px;font-size:16px;border-color:#fff;border-radius:10px}\n";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form method="POST" class="card"><div class="grid"><div class="login"><h1>Log In</h1>
        <div class="signup"><input type="email" name="email" placeholder="Email" class="input">
            <input type="password" name="password" placeholder="Password" class="input">
            <button type="submit" class="button">login</button></div></div></div></form>`;
});
export {
  Page as default
};
