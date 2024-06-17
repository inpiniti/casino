import { d as defineEventHandler, g as getRouterParam, u as useAppConfig } from '../../../runtime.mjs';
import { getKoreaTime, investingFetchAll } from '../index.mjs';
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
let store = {};
let isUpdating = false;
const _countryCode_ = defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");
  return await getCurrentStoer(String(countryCode));
});
const getCurrentStoer = async (countryCode) => {
  var _a;
  const currentStore = (_a = store == null ? void 0 : store[String(countryCode)]) != null ? _a : [];
  if (!isUpdating) {
    console.log(`[${getKoreaTime()}] investing`);
    updateStore(String(countryCode));
    console.log(`[${getKoreaTime()}] investing return`);
  }
  return currentStore;
};
async function updateStore(countryCode) {
  isUpdating = true;
  try {
    store[countryCode] = await investingFetchAll(codeList[countryCode].countryId);
  } finally {
    isUpdating = false;
  }
}

export { _countryCode_ as default, getCurrentStoer };
//# sourceMappingURL=_countryCode_.mjs.map
