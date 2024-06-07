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
const ve = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(138, 18);
  })();
  return store;
});

export { ve as default };
//# sourceMappingURL=ve.mjs.map
