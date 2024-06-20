import cloudscraper from "cloudscraper";
import puppeteer from "puppeteer";
import * as querystring from "querystring";

export const investingFetchAll = async (countryId: string) => {
  console.log(`[${getKoreaTime()}] investingFetch(${countryId})`);

  // total 확인
  const total = (await investingFetch({ countryId: countryId })).total;
  // pageSize 1000 으로 0page 부터 total 만큼 조회
  // ex) total 이 2540 이면, 0, 1, 2, 3 페이지를 조회하여 합친다음 리턴
  const promises = [];
  const totalPages = Math.ceil(total / 1000);
  console.log(`[${getKoreaTime()}] investingFetch total ${total}`);
  console.log(`[${getKoreaTime()}] investingFetch totalPages ${totalPages}`);
  for (let i = 0; i < totalPages; i++) {
    promises.push(investingFetch({ countryId: countryId, pageSize: 1000, pageNum: i }));
  }
  return Promise.all(promises)
    .then((results) => {
      // results는 각 페이지의 결과를 담은 배열입니다.
      // 이를 합치려면, Array.prototype.flat() 또는 Array.prototype.reduce()를 사용할 수 있습니다.
      return results.reduce((acc, curr) => {
        return acc.concat(curr.data);
      }, []);
    })
    .catch((error) => {
      // 에러 처리
      console.log(`[${getKoreaTime()}] investing fetch error: ${error}`);
      return [];
    });
};

export const investingFetch = async ({ countryId, pageSize = 1, pageNum = 0 }: { countryId: string; pageSize?: number; pageNum?: number }) => {
  console.log(`[${getKoreaTime()}] investingFetchTotal(${countryId}, ${pageSize}, ${pageNum})`);

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Set user agent and enable JavaScript before navigating to the page
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36");
  await page.setJavaScriptEnabled(true);

  // Set headers before navigating to the page
  await page.setExtraHTTPHeaders({
    Origin: "https://kr.investing.com",
    Referer: "https://kr.investing.com/",
    "Content-Type": "application/json",
    "Domain-Id": "kr",
    Priority: "u=1, i",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  });

  console.log(`[${getKoreaTime()}] investing fetch start`);

  const url = `https://api.investing.com/api/financialdata/assets/equitiesByCountry/default?fields-list=id,name,symbol,isCFD,high,low,last,lastPairDecimal,change,changePercent,volume,time,isOpen,url,flag,countryNameTranslated,exchangeId,performanceDay,performanceWeek,performanceMonth,performanceYtd,performanceYear,performance3Year,technicalHour,technicalDay,technicalWeek,technicalMonth,avgVolume,fundamentalMarketCap,fundamentalRevenue,fundamentalRatio,fundamentalBeta,pairType&country-id=${countryId}&page=${pageNum}&page-size=${pageSize}`;

  console.log("url", url);

  try {
    await page.goto(url);

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

export const investingChartFetch = async ({ code, interval, period }: { code: string; interval: string; period: string }) => {
  console.log(`[${getKoreaTime()}] investingChartFetch(${code}, ${interval}, ${period})`);

  const browser = await puppeteer.launch({
    executablePath: "/path/to/your/Chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Set user agent and enable JavaScript before navigating to the page
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36");
  await page.setJavaScriptEnabled(true);

  // Set headers before navigating to the page
  await page.setExtraHTTPHeaders({
    Origin: "https://kr.investing.com",
    Referer: "https://kr.investing.com/",
    "Content-Type": "application/json",
    "Domain-Id": "kr",
    Priority: "u=1, i",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  });

  const queryParams = querystring.stringify({
    interval: interval,
    period: period,
    pointscount: "160",
  });

  await page.goto(`https://api.investing.com/api/financialdata/${code}/historical/chart/?${queryParams}`);

  const result = await page.evaluate(() => {
    return JSON.parse(document.body.innerText);
  });

  await browser.close();

  return result;
};

export function getKoreaTime() {
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
