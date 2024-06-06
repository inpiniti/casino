import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {store = investingFetch(32, 1406)})();
  return store;
});
