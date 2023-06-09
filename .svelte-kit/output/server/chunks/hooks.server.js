import { p as pb } from "./pocketbase.js";
const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh();
    } catch (_) {
      pb.authStore.clear();
    }
  }
  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);
  const response = await resolve(event);
  response.headers.set("Set-Cookie", pb.authStore.exportToCookie({ httpOnly: false }));
  return response;
};
export {
  handle
};
