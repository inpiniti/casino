import cloudscraper from "cloudscraper";

export const investingFetch = async (countryId: number, pageSize = 5) => {
  console.timeLog("https://api.investing.com/api/financialdata/assets/equitiesByCountry/default");
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
      console.timeLog("success");
      return data;
    })
    .catch((err: any) => {
      console.timeLog(err.statusCode);
      console.timeLog(err.statusMessage);
    });
  return result;
};

export const investingChartFetch = async ({ code, interval, period }: { code: string; interval: string; period: string }) => {
  console.timeLog(`https://api.investing.com/api/financialdata/${code}/historical/chart/`);
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
      console.timeLog("success");
      return data;
    })
    .catch((err: any) => {
      console.timeLog(err.statusCode);
      console.timeLog(err.statusMessage);
    });
  return response;
};
