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
const jm = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(119, 83);
  })();
  return store;
});

export { jm as default };
//# sourceMappingURL=jm.mjs.map
