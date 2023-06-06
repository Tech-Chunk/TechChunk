import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.4026ce3a.js","_app/immutable/chunks/index.b4b62c68.js","_app/immutable/chunks/forms.36e5f795.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f85dc50f.js","_app/immutable/chunks/index.d64fbed3.js","_app/immutable/chunks/pocketbase.ec0be321.js"];
export const stylesheets = ["_app/immutable/assets/4.989f8d49.css"];
export const fonts = [];
