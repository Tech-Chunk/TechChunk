import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/4th-post.md": () => import("../../../../chunks/4th-post.js").then((n) => n._), "../../../posts/5th-post.md": () => import("../../../../chunks/5th-post.js").then((n) => n._), "../../../posts/first-post.md": () => import("../../../../chunks/first-post.js").then((n) => n._), "../../../posts/second-post.md": () => import("../../../../chunks/second-post.js").then((n) => n._), "../../../posts/third-post.md": () => import("../../../../chunks/third-post.js").then((n) => n._) }), `../../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
export {
  load
};
