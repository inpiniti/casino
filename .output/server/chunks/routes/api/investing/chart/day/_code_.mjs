import { d as defineEventHandler, g as getRouterParam } from '../../../../../runtime.mjs';
import { investingChartFetch } from '../../../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'cloudscraper';
import 'puppeteer';

const _code_ = defineEventHandler(async (event) => {
  const code = getRouterParam(event, "code");
  const result = await investingChartFetch({
    code: String(code),
    interval: "PT5M",
    period: "P1D"
  });
  return result;
});

export { _code_ as default };
//# sourceMappingURL=_code_.mjs.map
