import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.fde3c6f8.js","_app/immutable/chunks/index.8aab6e09.js","_app/immutable/chunks/forms.86555bdf.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.89f58c50.js","_app/immutable/chunks/index.9501c385.js","_app/immutable/chunks/pocketbase.c4b24bef.js"];
export const stylesheets = ["_app/immutable/assets/5.989f8d49.css"];
export const fonts = [];
