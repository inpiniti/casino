import puppeteer from 'puppeteer';
import * as querystring from 'querystring';

const investingFetch = async (countryId, pageSize = 5) => {
  console.log(`[${getKoreaTime()}] investingFetch(${countryId}, ${pageSize})`);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36");
  await page.setJavaScriptEnabled(true);
  await page.setExtraHTTPHeaders({
    Origin: "https://kr.investing.com",
    Referer: "https://kr.investing.com/",
    "Content-Type": "application/json",
    "Domain-Id": "kr",
    Priority: "u=1, i",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  });
  console.log(`[${getKoreaTime()}] investing fetch start`);
  try {
    await page.goto(
      `https://api.investing.com/api/financialdata/assets/equitiesByCountry/default?fields-list=id,name,symbol,isCFD,high,low,last,lastPairDecimal,change,changePercent,volume,time,isOpen,url,flag,countryNameTranslated,exchangeId,performanceDay,performanceWeek,performanceMonth,performanceYtd,performanceYear,performance3Year,technicalHour,technicalDay,technicalWeek,technicalMonth,avgVolume,fundamentalMarketCap,fundamentalRevenue,fundamentalRatio,fundamentalBeta,pairType&country-id=${countryId}&page-size=${pageSize}`,
      { timeout: 12e4 }
    );
    const result = await page.evaluate(() => {
      return JSON.parse(document.body.innerText);
    });
    await browser.close();
    console.log(`[${getKoreaTime()}] investing fetch end`);
    return result;
  } catch (error) {
    console.log(`[${getKoreaTime()}] investing fetch error: ${error}`);
    return [];
  }
};
const investingChartFetch = async ({ code, interval, period }) => {
  console.log(`[${getKoreaTime()}] investingChartFetch(${code}, ${interval}, ${period})`);
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36");
  await page.setJavaScriptEnabled(true);
  await page.setExtraHTTPHeaders({
    Origin: "https://kr.investing.com",
    Referer: "https://kr.investing.com/",
    "Content-Type": "application/json",
    "Domain-Id": "kr",
    Priority: "u=1, i",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  });
  const queryParams = querystring.stringify({
    interval,
    period,
    pointscount: "160"
  });
  await page.goto(`https://api.investing.com/api/financialdata/${code}/historical/chart/?${queryParams}`);
  const result = await page.evaluate(() => {
    return JSON.parse(document.body.innerText);
  });
  await browser.close();
  return result;
};
function getKoreaTime() {
  const date = /* @__PURE__ */ new Date();
  date.setHours(date.getHours() + 9);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export { getKoreaTime, investingChartFetch, investingFetch };
//# sourceMappingURL=index.mjs.map
