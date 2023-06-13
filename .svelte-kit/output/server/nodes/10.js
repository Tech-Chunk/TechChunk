import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.7fbe285a.js","_app/immutable/chunks/index.8aab6e09.js","_app/immutable/chunks/forms.068283ad.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.80c1c7e9.js","_app/immutable/chunks/index.9501c385.js","_app/immutable/chunks/pocketbase.c4b24bef.js"];
export const stylesheets = [];
export const fonts = [];
