import cloudscraper from 'cloudscraper';

const investingFetch = async (countryId, pageSize = 5) => {
  const result = await cloudscraper({
    uri: `https://api.investing.com/api/financialdata/assets/equitiesByCountry/default`,
    qs: {
      "fields-list": "id,name,symbol,isCFD,high,low,last,lastPairDecimal,change,changePercent,volume,time,isOpen,url,flag,countryNameTranslated,exchangeId,performanceDay,performanceWeek,performanceMonth,performanceYtd,performanceYear,performance3Year,technicalHour,technicalDay,technicalWeek,technicalMonth,avgVolume,fundamentalMarketCap,fundamentalRevenue,fundamentalRatio,fundamentalBeta,pairType",
      "country-id": countryId,
      "page-size": pageSize
    },
    headers: {
      Origin: "https://kr.investing.com",
      Referer: "https://kr.investing.com/",
      "Content-Type": "application/json",
      "Domain-Id": "kr",
      Priority: "u=1, i",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
    },
    json: true
  }).then((data) => {
    console.log("success");
    return data;
  }).catch((err) => {
    console.error(err);
  });
  return result;
};
const investingChartFetch = async ({
  code,
  interval,
  period
}) => {
  const response = await cloudscraper({
    uri: `https://api.investing.com/api/financialdata/${code}/historical/chart/`,
    qs: {
      interval,
      period,
      pointscount: "160"
    },
    headers: {
      Origin: "https://kr.investing.com",
      Referer: "https://kr.investing.com/",
      "Content-Type": "application/json",
      "Domain-Id": "kr",
      Priority: "u=1, i",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
    },
    json: true
  }).then((data) => {
    console.log("success");
    return data;
  }).catch((err) => {
    console.error(err);
  });
  return response;
};

export { investingChartFetch, investingFetch };
//# sourceMappingURL=index.mjs.map
