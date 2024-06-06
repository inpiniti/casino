import { investingFetch } from "../utils/index";

let store = null;

export default defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(5, 1000);
  })();
  return store;
});
