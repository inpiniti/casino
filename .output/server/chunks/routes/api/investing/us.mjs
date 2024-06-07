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
const us = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(5, 1e3);
  })();
  return store;
});

export { us as default };
//# sourceMappingURL=us.mjs.map
