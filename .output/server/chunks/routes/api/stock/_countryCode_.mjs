import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { getCurrentStoer } from '../investing/_countryCode_.mjs';
import { getCurrentStoer as getCurrentStoer$1 } from '../tradingview/_countryCode_.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../index.mjs';
import 'puppeteer';
import 'querystring';

const _countryCode_ = defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");
  const investingArr = await getCurrentStoer(String(countryCode));
  const tradingviewArr = await getCurrentStoer$1(String(countryCode));
  const result = investingArr.map((i) => {
    const t = tradingviewArr.find((t2) => t2.name === i.Symbol);
    return {
      ...i,
      ...t
    };
  });
  return result;
});

export { _countryCode_ as default };
//# sourceMappingURL=_countryCode_.mjs.map
