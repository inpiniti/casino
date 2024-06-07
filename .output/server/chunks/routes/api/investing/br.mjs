import { d as defineEventHandler } from '../../../runtime.mjs';
import { investingFetch } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'cloudscraper';
import 'puppeteer';

let store = null;
const br = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(32, 1406);
  })();
  return store;
});

export { br as default };
//# sourceMappingURL=br.mjs.map
