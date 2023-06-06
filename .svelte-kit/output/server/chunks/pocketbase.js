import Pocketbase from "pocketbase";
import { w as writable } from "./index2.js";
const pb = new Pocketbase("http://127.0.0.1:8090");
const currentUser = writable(pb.authStore.model);
export {
  currentUser as c,
  pb as p
};
