import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.b38e20ed.js","_app/immutable/chunks/index.1a6c1991.js","_app/immutable/chunks/forms.37b2fc66.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fc93c95f.js","_app/immutable/chunks/index.2ecaa400.js","_app/immutable/chunks/pocketbase.cafca4f3.js"];
export const stylesheets = [];
export const fonts = [];
