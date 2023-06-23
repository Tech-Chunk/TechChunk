import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.70ea4bdf.js","_app/immutable/chunks/index.1a6c1991.js","_app/immutable/chunks/utils.9a66bb98.js"];
export const stylesheets = ["_app/immutable/assets/2.32c900e2.css"];
export const fonts = [];
