import cloudscraper from "cloudscraper";
import puppeteer from "puppeteer";

export const investingFetch = async (countryId: number, pageSize = 5) => {
  console.log(`[${getKoreaTime()}] investingFetch(${countryId}, ${pageSize})`);

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(
    `https://api.investing.com/api/financialdata/assets/equitiesByCountry/default?fields-list=id,name,symbol,isCFD,high,low,last,lastPairDecimal,change,changePercent,volume,time,isOpen,url,flag,countryNameTranslated,exchangeId,performanceDay,performanceWeek,performanceMonth,performanceYtd,performanceYear,performance3Year,technicalHour,technicalDay,technicalWeek,technicalMonth,avgVolume,fundamentalMarketCap,fundamentalRevenue,fundamentalRatio,fundamentalBeta,pairType&country-id=${countryId}&page-size=${pageSize}`
  );

  const result = await page.evaluate(() => {
    return JSON.parse(document.body.innerText);
  });

  await browser.close();

  return result;
};

/* export const investingFetch = async (countryId: number, pageSize = 5) => {
  console.log(`[${getKoreaTime()}] investingFetch(${countryId}, ${pageSize})`);
  const result = await cloudscraper({
    uri: `https://api.investing.com/api/financialdata/assets/equitiesByCountry/default`,
    qs: {
      "fields-list":
        "id,name,symbol,isCFD,high,low,last,lastPairDecimal,change,changePercent,volume,time,isOpen,url,flag,countryNameTranslated,exchangeId,performanceDay,performanceWeek,performanceMonth,performanceYtd,performanceYear,performance3Year,technicalHour,technicalDay,technicalWeek,technicalMonth,avgVolume,fundamentalMarketCap,fundamentalRevenue,fundamentalRatio,fundamentalBeta,pairType",
      "country-id": countryId,
      "page-size": pageSize,
    },
    headers: {
      Origin: "https://kr.investing.com",
      Referer: "https://kr.investing.com/",
      "Content-Type": "application/json",
      "Domain-Id": "kr",
      Priority: "u=1, i",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    },
    json: true,
  })
    .then((data: any) => {
      console.log(`[${getKoreaTime()}] success`);
      return data;
    })
    .catch((err: any) => {
      console.log(`[${getKoreaTime()}] ${err.statusCode}`);
      console.log(`[${getKoreaTime()}] ${err.statusMessage}`);
    });
  return result;
}; */

export const investingChartFetch = async ({ code, interval, period }: { code: string; interval: string; period: string }) => {
  console.log(`[${getKoreaTime()}] investingChartFetch(${code}, ${interval}, ${period})`);
  const response = await cloudscraper({
    uri: `https://api.investing.com/api/financialdata/${code}/historical/chart/`,
    qs: {
      interval: interval,
      period: period,
      pointscount: "160",
    },
    headers: {
      Origin: "https://kr.investing.com",
      Referer: "https://kr.investing.com/",
      "Content-Type": "application/json",
      "Domain-Id": "kr",
      Priority: "u=1, i",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    },
    json: true,
  })
    .then((data: any) => {
      console.log(`[${getKoreaTime()}] success`);
      return data;
    })
    .catch((err: any) => {
      console.log(`[${getKoreaTime()}] ${err.statusCode}`);
      console.log(`[${getKoreaTime()}] ${err.statusMessage}`);
    });
  return response;
};

function getKoreaTime() {
  const date = new Date();
  date.setHours(date.getHours() + 9); // Convert to Korea time

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
