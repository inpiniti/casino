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
const kr = defineEventHandler(async (event) => {
  (() => {
    store = investingFetch(11, 2799);
  })();
  return store;
});

export { kr as default };
//# sourceMappingURL=kr.mjs.map
