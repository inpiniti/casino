import cloudscraper from "cloudscraper";

export const investingFetch = async (countryId: number, pageSize = 5) => {
  console.log(`[${new Date().toISOString()}] investingFetch(${countryId}, ${pageSize})`);
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
      console.log(`[${new Date().toISOString()}] success`);
      return data;
    })
    .catch((err: any) => {
      console.log(`[${new Date().toISOString()}] ${err.statusCode}`);
      console.log(`[${new Date().toISOString()}] ${err.statusMessage}`);
    });
  return result;
};

export const investingChartFetch = async ({ code, interval, period }: { code: string; interval: string; period: string }) => {
  console.log(`[${new Date().toISOString()}] investingChartFetch(${code}, ${interval}, ${period})`);
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
      console.log(`[${new Date().toISOString()}] success`);
      return data;
    })
    .catch((err: any) => {
      console.log(`[${new Date().toISOString()}] ${err.statusCode}`);
      console.log(`[${new Date().toISOString()}] ${err.statusMessage}`);
    });
  return response;
};
