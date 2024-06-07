import { d as defineEventHandler } from '../../../runtime.mjs';
import { investingFetch } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'puppeteer';
import 'querystring';

let store = null;
let isUpdating = false;
const jm = defineEventHandler(async (event) => {
  const currentStore = store;
  if (!isUpdating) {
    updateStore();
  }
  return currentStore;
});
async function updateStore() {
  isUpdating = true;
  try {
    store = await investingFetch(119, 83);
  } finally {
    isUpdating = false;
  }
}

export { jm as default };
//# sourceMappingURL=jm.mjs.map
