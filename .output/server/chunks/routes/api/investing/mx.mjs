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
const mx = defineEventHandler(async (event) => {
  const currentStore = store;
  if (!isUpdating) {
    updateStore();
  }
  return currentStore;
});
async function updateStore() {
  isUpdating = true;
  try {
    store = await investingFetch(7, 726);
  } finally {
    isUpdating = false;
  }
}

export { mx as default };
//# sourceMappingURL=mx.mjs.map
