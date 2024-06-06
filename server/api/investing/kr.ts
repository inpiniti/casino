import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {store = investingFetch(11, 2799)})();
  return store;
});
