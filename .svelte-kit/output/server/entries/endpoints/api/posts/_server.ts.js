import { _ as __vite_glob_0_0 } from "../../../../chunks/4th-post.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/5th-post.js";
import { _ as __vite_glob_0_2 } from "../../../../chunks/first-post.js";
import { _ as __vite_glob_0_3 } from "../../../../chunks/second-post.js";
import { _ as __vite_glob_0_4 } from "../../../../chunks/third-post.js";
import { j as json } from "../../../../chunks/index.js";
async function getPosts() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/4th-post.md": __vite_glob_0_0, "/src/posts/5th-post.md": __vite_glob_0_1, "/src/posts/first-post.md": __vite_glob_0_2, "/src/posts/second-post.md": __vite_glob_0_3, "/src/posts/third-post.md": __vite_glob_0_4 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata;
      const post = { ...metadata, slug };
      post.published && posts.push(post);
    }
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
