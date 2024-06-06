import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {store = investingFetch(7, 726)})();
  return store;
});
