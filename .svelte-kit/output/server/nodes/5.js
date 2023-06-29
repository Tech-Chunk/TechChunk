import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.2430371a.js","_app/immutable/chunks/index.1a6c1991.js","_app/immutable/chunks/forms.37b2fc66.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc93c95f.js","_app/immutable/chunks/index.2ecaa400.js","_app/immutable/chunks/pocketbase.cafca4f3.js"];
export const stylesheets = ["_app/immutable/assets/5.989f8d49.css"];
export const fonts = [];
