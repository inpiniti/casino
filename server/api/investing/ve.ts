import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {store = investingFetch(138, 18)})();
  return store;
});
