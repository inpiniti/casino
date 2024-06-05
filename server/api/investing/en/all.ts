export default defineEventHandler(async (event) => {
  const headers = {
    Origin: "https://kr.investing.com",
    "Content-Type": "application/json",
    "Domain-Id": "kr",
    Priority: "u=1, i",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  };
  const response = await fetch(
    "https://api.investing.com/api/financialdata/assets/equitiesByCountry/default?fields-list=id%2Cname%2Csymbol%2CisCFD%2Chigh%2Clow%2Clast%2ClastPairDecimal%2Cchange%2CchangePercent%2Cvolume%2Ctime%2CisOpen%2Curl%2Cflag%2CcountryNameTranslated%2CexchangeId%2CperformanceDay%2CperformanceWeek%2CperformanceMonth%2CperformanceYtd%2CperformanceYear%2Cperformance3Year%2CtechnicalHour%2CtechnicalDay%2CtechnicalWeek%2CtechnicalMonth%2CavgVolume%2CfundamentalMarketCap%2CfundamentalRevenue%2CfundamentalRatio%2CfundamentalBeta%2CpairType&country-id=5&filter-domain=&page=0&page-size=100&limit=0&include-additional-indices=false&include-major-indices=false&include-other-indices=false&include-primary-sectors=false",
    {
      method: "GET",
      headers: {
        Origin: "https://kr.investing.com",
        "Content-Type": "application/json",
        "Domain-Id": "kr",
        Priority: "u=1, i",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    }
  );

  console.log("==================status==================");
  console.log(response.status);
  console.log("==================statusText==================");
  console.log(response.statusText);
  console.log("==================headers==================");
  console.log(response.headers);
  console.log("==================body==================");
  console.log(response.body);
  console.log("==================bodyUsed==================");
  console.log(response.bodyUsed);
  console.log("==================ok==================");
  console.log(response.ok);
  console.log("==================redirected==================");
  console.log(response.redirected);
  console.log("==================type==================");
  console.log(response.type);

  return await response.json();
});
