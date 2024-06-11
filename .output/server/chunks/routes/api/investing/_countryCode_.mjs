import { d as defineEventHandler, g as getRouterParam, u as useAppConfig } from '../../../runtime.mjs';
import { investingFetch } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'puppeteer';
import 'querystring';

const appConfig = useAppConfig();
const codeList = appConfig.codeList;
let store = null;
let isUpdating = false;
const _countryCode_ = defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");
  const currentStore = store;
  if (!isUpdating) {
    updateStore(String(countryCode));
  }
  return currentStore;
});
async function updateStore(countryCode) {
  isUpdating = true;
  try {
    store = await investingFetch(codeList[countryCode].countryId, codeList[countryCode].pageSize);
  } finally {
    isUpdating = false;
  }
}

export { _countryCode_ as default };
//# sourceMappingURL=_countryCode_.mjs.map
