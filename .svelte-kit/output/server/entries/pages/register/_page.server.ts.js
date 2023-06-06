import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
      await locals.pb.collection("users").create(data);
      await locals.pb.collection("users").authWithPassword(data.email, data.password);
    } catch (e) {
      console.error(e);
      throw e;
    }
    throw redirect(303, "/");
  }
};
export {
  actions
};
