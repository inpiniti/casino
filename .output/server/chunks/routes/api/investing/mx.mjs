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
const mx = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(7, 726);
  })();
  return store;
});

export { mx as default };
//# sourceMappingURL=mx.mjs.map
