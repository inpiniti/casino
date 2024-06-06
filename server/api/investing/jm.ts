import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {store = investingFetch(119, 83)})();
  return store;
});
