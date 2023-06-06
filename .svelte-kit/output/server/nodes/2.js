import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.c73e0e18.js","_app/immutable/chunks/index.8aab6e09.js","_app/immutable/chunks/utils.9a66bb98.js"];
export const stylesheets = ["_app/immutable/assets/2.5769dc48.css"];
export const fonts = [];
