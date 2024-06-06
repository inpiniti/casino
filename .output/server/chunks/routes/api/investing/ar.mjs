import { d as defineEventHandler } from '../../../runtime.mjs';
import { investingFetch } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'cloudscraper';

let store = null;
const ar = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(29, 370);
  })();
  return store;
});

export { ar as default };
//# sourceMappingURL=ar.mjs.map
