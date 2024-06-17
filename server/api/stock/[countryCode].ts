import { getCurrentStoer as investingStore } from "../investing/[countryCode]";
import { getCurrentStoer as tradingviewStore } from "../tradingview/[countryCode]";

export default defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");

  const investingArr = await investingStore(String(countryCode));
  // "Symbol": "005935",

  const tradingviewArr = await tradingviewStore(String(countryCode));
  // "name": "005935",

  // Symbol과 name이 일치하는 데이터를 찾아서 합친다.
  const result = investingArr.map((i: any) => {
    const t = tradingviewArr.find((t: any) => t.name === i.Symbol);
    return {
      ...i,
      ...t,
    };
  });

  return result;
});
