<script setup lang="ts">
import { onMounted, ref } from "vue";
const stock = useStock().value;

const route = useRoute();

const data = ref<any[]>([]);

onMounted(() => {
  getInvestingChart();
});
const getInvestingChart = () => {
  fetch(`/api/investing/chart/day/${route.params.id}`)
    .then((res) => res.json())
    .then((newData) => {
      data.value = transformedData(newData.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

const transformedData = (rawData: any) => {
  if (!Array.isArray(rawData)) {
    console.error("Invalid rawData: rawData should be an array");
    return [];
  }

  return rawData.map((item: any) => {
    const date = new Date(item[0]);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1)?.toString().padStart(2, "0");
    const day = date.getDate()?.toString().padStart(2, "0");
    const hour = date.getHours()?.toString().padStart(2, "0");
    const minute = date.getMinutes()?.toString().padStart(2, "0");
    return {
      date: `${hour}:${minute}`,
      시가: item[1],
      거래량: item[5],
    };
  });
};

// 점수
const score = computed(() => {
  let totalScore = 0;

  // 오버뷰.상대적 거래량이 1보다 크면 3점
  // 오버뷰.P/E가 50보다 크면 0
  // 오버뷰.P/E가 25~50 1점
  // 오버뷰.P/E가 15~25 2점
  // 오버뷰.P/E가 5~15 3점
  // 오버뷰.P/E가 5보다 작으면 4점
  if (Number(stock?.relative_volume_10d_calc) > 1) totalScore += 3;
  if (stock?.price_earnings_ttm > 50) totalScore += 0;
  else if (stock?.price_earnings_ttm > 25) totalScore += 1;
  else if (stock?.price_earnings_ttm > 15) totalScore += 2;
  else if (stock?.price_earnings_ttm >= 5) totalScore += 3;
  else totalScore += 4;

  // 오버뷰.EPS 희석 성장 TTM YoY가 50 이상이면 5점
  // 오버뷰.EPS 희석 성장 TTM YoY가 25~50이면 4점
  // 오버뷰.EPS 희석 성장 TTM YoY가 10~25이면 3점
  // 오버뷰.EPS 희석 성장 TTM YoY가 0~10이면 2점
  // 오버뷰.EPS 희석 성장 TTM YoY가 -25~0 미만이면 1점
  // 오버뷰.EPS 희석 성장 TTM YoY가 -25 미만이면 0점
  if (stock?.earnings_per_share_diluted_yoy_growth_ttm >= 50) totalScore += 5;
  else if (stock?.earnings_per_share_diluted_yoy_growth_ttm >= 25)
    totalScore += 4;
  else if (stock?.earnings_per_share_diluted_yoy_growth_ttm >= 10)
    totalScore += 3;
  else if (stock?.earnings_per_share_diluted_yoy_growth_ttm >= 0)
    totalScore += 2;
  else if (stock?.earnings_per_share_diluted_yoy_growth_ttm >= -25)
    totalScore += 1;
  else totalScore += 0;

  // ROE 30% 이상이면 4점
  // ROE 15% ~ 3점
  // ROE 0% ~ 2점
  // ROE -15% ~ 1점
  // ROE -15% 보다 작으면 0점
  if (stock.return_on_equity_fq >= 30) totalScore += 4;
  else if (stock.return_on_equity_fq >= 15) totalScore += 3;
  else if (stock.return_on_equity_fq >= 0) totalScore += 2;
  else if (stock.return_on_equity_fq >= -15) totalScore += 1;
  else totalScore += 0;

  // PEG 1 이하면 3점

  // 시간외.갭 % 0 이상이면 3점
  // 시간외.볼륨변화 0 이상이면 3점
  if (stock?.gap >= 0) totalScore += 3;
  if (stock?.volume_change >= 0) totalScore += 3;

  // 평가.시가총액 실적 % 1Y가 0 이상이면 3점
  if (stock?.["Perf.1Y.MarketCap"] >= 0) totalScore += 3;

  // 수익성.총마진 0 이상이면 3점
  // 수익성.영업마진 0 이상이면 3점
  // 수익성.세전 마진 0 이상이면 3점
  // 수익성.넷 마진 0 이상이면 3점
  // 수익성.FCF 마진 0 이상이면 3점
  // 수익성.ROA 0 이상이면 3점
  // 수익성.ROE 0 이상이면 3점
  // 수익성.투하자본수익률 0 이상이면 3점
  if (stock.gross_margin_ttm >= 0) totalScore += 3;
  if (stock.operating_margin_ttm >= 0) totalScore += 3;
  if (stock.pre_tax_margin_ttm >= 0) totalScore += 3;
  if (stock.net_margin_ttm >= 0) totalScore += 3;
  if (stock.free_cash_flow_margin_ttm >= 0) totalScore += 3;
  if (stock.return_on_assets_fq >= 0) totalScore += 3;
  if (stock.return_on_equity_fq >= 0) totalScore += 3;
  if (stock.return_on_invested_capital_fq >= 0) totalScore += 3;

  // 손익계산.매출 성장률 0 이상이면 3점
  if (stock?.PerformanceYear >= 0) totalScore += 3;

  // 테크니컬즈.기술등급 0.5 ~ 이면 5점
  // 테크니컬즈.기술등급 0.1 ~ 0.5 이상이면 4점
  // 테크니컬즈.기술등급 -0.1 ~ 0.1  이상이면 3점
  // 테크니컬즈.기술등급 -0.5 ~ -0.1  이상이면 2점
  // 테크니컬즈.기술등급 ~ -0.5 이상이면 1점
  if (stock?.["Recommend.All"] >= 0.5) totalScore += 5;
  else if (stock?.["Recommend.All"] >= 0.1) totalScore += 4;
  else if (stock?.["Recommend.All"] >= -0.1) totalScore += 3;
  else if (stock?.["Recommend.All"] >= -0.5) totalScore += 2;
  else totalScore += 1;

  // 테크니컬즈.MA 레이팅 0 이상이면 3점
  // 테크니컬즈.Os 등급 0 이상이면 3점
  if (stock?.["Recommend.MA"] >= 0) totalScore += 3;
  if (stock?.["Recommend.Other"] >= 0) totalScore += 3;

  return totalScore;
});

// {
//     "AvgVolume": 2462960,
//     "Chg": 100,
//     "ChgPct": 2.14,
//     "CountryNameTranslated": "한국",
//     "ExchangeId": "60",
//     "Flag": "KR",
//     "FundamentalBeta": 0.945,
//     "FundamentalMarketCap": 2490000000000,
//     "FundamentalRatio": 163.88,
//     "FundamentalRevenue": "9.62T",
//     "High": 4815,
//     "Id": "43346",
//     "IsCFD": "false",
//     "IsOpen": "0",
//     "Last": 4770,
//     "LastPairDecimal": 0,
//     "Low": 4635,
//     "Name": "한온시스템",
//     "PairType": "Equities",
//     "Performance3Year": -73.65,
//     "PerformanceDay": 2.14,
//     "PerformanceMonth": -7.92,
//     "PerformanceWeek": -2.85,
//     "PerformanceYear": -48.87,
//     "PerformanceYtd": -34.57,
//     "Symbol": "018880",
//     "TechnicalDay": "strong_sell",
//     "TechnicalHour": "buy",
//     "TechnicalMonth": "strong_sell",
//     "TechnicalWeek": "strong_sell",
//     "Time": "1718606962",
//     "Url": "/equities/halla-visteon-climate-control",
//     "Volume": 2599806,
//     "name": "018880",
//     "description": "HANON SYSTEMS",
//     "logoid": "hanon-systems",
//     "update_mode": "delayed_streaming_1200",
//     "type": "stock",
//     "typespecs": [
//       "common"
//     ],
//     "close": 4770,
//     "pricescale": 1,
//     "minmov": 5,
//     "fractional": "false",
//     "minmove2": 0,
//     "currency": "KRW",
//     "change": 2.141327623126338,
//     "volume": 2614822,
//     "relative_volume_10d_calc": 0.5459890304067686,
//     "market_cap_basic": 2492231694336,
//     "fundamental_currency_code": "KRW",
//     "price_earnings_ttm": 165.43773367646344,
//     "earnings_per_share_diluted_ttm": 28.8326,
//     "earnings_per_share_diluted_yoy_growth_ttm": -65.50303242039672,
//     "dividends_yield_current": 6.7666,
//     "sector.tr": "Producer Manufacturing",
//     "market": "korea",
//     "sector": "Producer Manufacturing",
//     "recommendation_mark": 1.840909,
//     "exchange": "KRX",
//     "Perf.W": -4.790419161676646,
//     "Perf.1M": -10.169491525423728,
//     "Perf.3M": -19.289340101522843,
//     "Perf.6M": -32.05128205128205,
//     "Perf.YTD": -34.3878954607978,
//     "Perf.Y": -49.147121535181235,
//     "Perf.5Y": -60.578512396694215,
//     "Perf.10Y": -47.23451327433628,
//     "Perf.All": 215.89403973509934,
//     "Volatility.W": 3.55616038098972,
//     "Volatility.M": 3.0307906746300066,
//     "premarket_close": null,
//     "premarket_change": null,
//     "premarket_gap": null,
//     "premarket_volume": null,
//     "gap": -0.5353319057815845,
//     "volume_change": -26.632544034693524,
//     "postmarket_close": null,
//     "postmarket_change": null,
//     "postmarket_volume": null,
//     "Perf.1Y.MarketCap": -49.30257510728668,
//     "price_earnings_growth_ttm": null,
//     "price_sales_current": 0.2589705133088032,
//     "price_book_fq": 1.0530116274934678,
//     "price_to_cash_f_operating_activities_ttm": 6.456001921593508,
//     "price_free_cash_flow_ttm": null,
//     "price_to_cash_ratio": 3.1039004669439563,
//     "enterprise_value_current": 6396302401844,
//     "enterprise_value_to_revenue_ttm": 0.6646467918495623,
//     "enterprise_value_to_ebit_ttm": 22.65164773492153,
//     "enterprise_value_ebitda_ttm": 7.134853030264761,
//     "dps_common_stock_prim_issue_fy": 316,
//     "dps_common_stock_prim_issue_fq": null,
//     "dividends_yield": 1.4561028,
//     "dividend_payout_ratio_ttm": 1095.9816319027768,
//     "dps_common_stock_prim_issue_yoy_growth_fy": -12.222222222222221,
//     "continuous_dividend_payout": 8,
//     "continuous_dividend_growth": 0,
//     "gross_margin_ttm": 9.09498234080886,
//     "operating_margin_ttm": 2.93420946509389,
//     "pre_tax_margin_ttm": 0.892716887924333,
//     "net_margin_ttm": 0.159888711789072,
//     "free_cash_flow_margin_ttm": -0.8095240124874102,
//     "return_on_assets_fq": 0.162003388843735,
//     "return_on_equity_fq": 0.643473652439985,
//     "return_on_invested_capital_fq": 0.306325708708277,
//     "research_and_dev_ratio_ttm": 1.9740771351478466,
//     "sell_gen_admin_exp_other_ratio_ttm": 3.6894420556559324,
//     "total_assets_fq": 9783009565473,
//     "total_current_assets_fq": 3965771962876,
//     "cash_n_short_term_invest_fq": 832628879199,
//     "total_liabilities_fq": 7225230493368,
//     "total_debt_fq": 4596366195989,
//     "net_debt_fq": 3763737316790,
//     "total_equity_fq": 2557779072105,
//     "current_ratio_fq": 1.08575613883555,
//     "quick_ratio_fq": 0.745569167931747,
//     "debt_to_equity_fq": 1.90133173679082,
//     "cash_n_short_term_invest_to_total_debt_fq": 0.18114937837755185,
//     "cash_f_operating_activities_ttm": 394299512611,
//     "cash_f_investing_activities_ttm": -682168258525,
//     "cash_f_financing_activities_ttm": 29701572303,
//     "free_cash_flow_ttm": -77905444650,
//     "capital_expenditures_ttm": -800326893752,
//     "Recommend.All": -0.26363636363636367,
//     "Recommend.MA": -0.8,
//     "Recommend.Other": 0.2727272727272727,
//     "RSI": 36.61161907678457,
//     "Mom": -240,
//     "AO": -475.5588235294117,
//     "CCI20": -135.9758399396008,
//     "Stoch.K": 7.848266478104823,
//     "Stoch.D": 4.930050456766756,
//     "Candle.3BlackCrows": 0,
//     "Candle.3WhiteSoldiers": 0,
//     "Candle.AbandonedBaby.Bearish": 0,
//     "Candle.AbandonedBaby.Bullish": 0,
//     "Candle.Doji": 0,
//     "Candle.Doji.Dragonfly": 0,
//     "Candle.Doji.Gravestone": 0,
//     "Candle.Engulfing.Bearish": 0,
//     "Candle.Engulfing.Bullish": 1,
//     "Candle.EveningStar": 0,
//     "Candle.Hammer": 0,
//     "Candle.HangingMan": 0,
//     "Candle.Harami.Bearish": 0,
//     "Candle.Harami.Bullish": 0,
//     "Candle.InvertedHammer": 0,
//     "Candle.Kicking.Bearish": 0,
//     "Candle.Kicking.Bullish": 0,
//     "Candle.LongShadow.Lower": 0,
//     "Candle.LongShadow.Upper": 0,
//     "Candle.Marubozu.Black": 0,
//     "Candle.Marubozu.White": 0,
//     "Candle.MorningStar": 0,
//     "Candle.ShootingStar": 0,
//     "Candle.SpinningTop.Black": 0,
//     "Candle.SpinningTop.White": 0,
//     "Candle.TriStar.Bearish": 0,
//     "Candle.TriStar.Bullish": 0
//   }

const indicator = ref([
  {
    name: "오버뷰",
    discrption: "종목의 전반을 나타내는 개요 정보",
    data: [
      { label: "종목명", value: stock?.Name },
      {
        label: "현재가",
        value: stock?.Last.toLocaleString() + " " + stock?.currency,
      }, // 예시: "100,700 KRW"
      { label: "변화 %", value: stock?.ChgPct?.toFixed(2) + "%" }, // 예시: "+2.27%"
      { label: "거래량", value: stock?.Volume.toLocaleString() }, // 예시: "1,731 M"
      {
        label: "상대적 거래량",
        value: (Number(stock?.relative_volume_10d_calc) / 100)?.toFixed(2),
      }, // 예시: "1.15"
      {
        label: "시가총액",
        value: (stock?.market_cap_basic / 1000000)?.toFixed(2) + " T KRW",
      }, // 예시: "507.46 T KRW"
      { label: "P/E", value: stock?.price_earnings_ttm?.toFixed(2) }, // 예시: "21.76"
      {
        label: "EPS 희석 순마진",
        value: stock?.earnings_per_share_diluted_ttm?.toFixed(2) + " KRW",
      }, // 예시: "2899.18 KRW"
      {
        label: "EPS 희석 성장 TTM YoY",
        value:
          stock?.earnings_per_share_diluted_yoy_growth_ttm?.toFixed(2) + "%",
      }, // 예시: "-56.24%"
      {
        label: "배당 수익% 순마진",
        value: stock?.dividends_yield?.toFixed(2) + "%",
      }, // 예시: "2.34%"
      { label: "섹터", value: stock?.sector }, // 예시: "전자 기술"
      {
        label: "애널리스트 평점",
        value: stock?.recommendation_mark > 3 ? "스트롱 바이" : "홀드",
      }, // 조건부 예시
    ],
  },
  {
    name: "성과",
    discrption: "주가의 상승 또는 하락을 나타냄",
    data: [
      { label: "포퍼먼스 % 1주", value: stock?.["Perf.W"]?.toFixed(2) + "%" },
      { label: "포퍼먼스 % 1달", value: stock?.["Perf.1M"]?.toFixed(2) + "%" },
      { label: "포퍼먼스 % 3달", value: stock?.["Perf.3M"]?.toFixed(2) + "%" },
      { label: "포퍼먼스 % 6달", value: stock?.["Perf.6M"]?.toFixed(2) + "%" },
      { label: "퍼포먼스 YTD", value: stock?.["Perf.YTD"]?.toFixed(2) + "%" },
      { label: "퍼포먼스 % 1Y", value: stock?.["Perf.Y"]?.toFixed(2) + "%" },
      { label: "퍼포먼스 % 5Y", value: stock?.["Perf.5Y"]?.toFixed(2) + "%" },
      { label: "퍼포먼스 % 10Y", value: stock?.["Perf.10Y"]?.toFixed(2) + "%" },
      { label: "퍼포먼스 % ALL", value: stock?.["Perf.All"]?.toFixed(2) + "%" },
      { label: "변동성 1주", value: stock?.["Volatility.W"]?.toFixed(2) + "%" },
      { label: "변동성 1달", value: stock?.["Volatility.M"]?.toFixed(2) + "%" },
    ],
  },
  {
    name: "시간외",
    discrption: "폐장된 후에 발생하는 주식 거래",
    data: [
      {
        label: "프리-마켓 클로즈",
        value:
          stock?.premarket_close !== null
            ? stock?.premarket_close?.toFixed(2)
            : "-",
      },
      {
        label: "프리-마켓 체인지 %",
        value:
          stock?.premarket_change !== null
            ? (stock?.premarket_change * 100)?.toFixed(2) + "%"
            : "-",
      },
      {
        label: "프리-마켓 갭 %",
        value:
          stock?.premarket_gap !== null
            ? (stock?.premarket_gap * 100)?.toFixed(2) + "%"
            : "-",
      },
      {
        label: "프리-마켓 볼륨",
        value:
          stock?.premarket_volume !== null
            ? stock?.premarket_volume?.toString()
            : "-",
      },
      { label: "갭 %", value: stock?.gap?.toFixed(2) + "%" },
      { label: "거래량", value: "+" + stock?.volume_change?.toFixed(2) + "%" },
      {
        label: "볼륨 변화 %",
        value:
          "+" +
          ((stock?.volume / stock?.AvgVolume - 1) * 100)?.toFixed(2) +
          "%",
      },
      {
        label: "포스트-마켓 클로즈",
        value:
          stock?.postmarket_close !== null
            ? stock?.postmarket_close?.toFixed(2)
            : "-",
      },
      {
        label: "포스트-마켓 체인지 %",
        value:
          stock?.postmarket_change !== null
            ? (stock?.postmarket_change * 100)?.toFixed(2) + "%"
            : "-",
      },
      {
        label: "포스트-마켓 볼륨",
        value:
          stock?.postmarket_volume !== null
            ? stock?.postmarket_volume?.toString()
            : "-",
      },
    ],
  },
  {
    name: "평가",
    discrption: "주식의 현재 가치를 나타냄",
    data: [
      {
        label: "시가총액 실적 % 1Y",
        value: `${stock?.["Perf.1Y.MarketCap"]}%`,
      },
      {
        label: "PEG 순마진",
        value: stock?.price_earnings_growth_ttm
          ? stock?.price_earnings_growth_ttm
          : "-",
      },
      {
        label: "P/S",
        value: stock?.price_sales_current
          ? stock?.price_sales_current?.toString()
          : "-",
      },
      { label: "P/B", value: stock?.price_book_fq?.toString() },
      {
        label: "P/CF",
        value: stock?.price_to_cash_f_operating_activities_ttm?.toString(),
      },
      {
        label: "P/FCF",
        value: stock?.price_free_cash_flow_ttm
          ? stock?.price_free_cash_flow_ttm?.toString()
          : "-",
      },
      {
        label: "프라이스 / 캐쉬",
        value: stock?.price_to_cash_ratio?.toString(),
      },
      { label: "기업가치", value: `${stock?.enterprise_value_current} T` },
      {
        label: "EV / 수익 순마진",
        value: stock?.enterprise_value_to_revenue_ttm?.toString(),
      },
      {
        label: "EV / 에비타 순마진",
        value: stock?.enterprise_value_to_ebit_ttm?.toString(),
      },
      {
        label: "EV / EBITDA 순마진",
        value: stock?.enterprise_value_ebitda_ttm?.toString(),
      },
    ],
  },
  {
    name: "배당",
    discrption: "주주들에게 지급하는 이익의 일부",
    data: [
      {
        label: "주당 배당금 FY",
        value: `${stock?.dps_common_stock_prim_issue_fy?.toFixed(2)} KRW`,
      },
      {
        label: "주당 배당금 FQ",
        value: stock?.dps_common_stock_prim_issue_fq
          ? `${stock?.dps_common_stock_prim_issue_fq?.toFixed(2)} KRW`
          : "-",
      },
      {
        label: "배당 수익 % 순마진",
        value: `${stock?.dividends_yield?.toFixed(2)}%`,
      },
      {
        label: "배당 수익률 %",
        value: `${stock?.dividends_yield_current?.toFixed(2)}%`,
      },
      {
        label: "배당 비율 % 순마진",
        value: `${stock?.dividend_payout_ratio_ttm?.toFixed(2)}%`,
      },
      {
        label: "DPS 성장 연간 YoY",
        value: `${stock?.dps_common_stock_prim_issue_yoy_growth_fy?.toFixed(
          2
        )}%`,
      },
      {
        label: "연속 배당 지불",
        value: stock?.continuous_dividend_payout?.toString(),
      },
      {
        label: "연속 배당 성장",
        value: stock?.continuous_dividend_growth?.toString(),
      },
    ],
  },
  {
    name: "수익성",
    discrption: "회사 수익과 관련된 지표",
    data: [
      { label: "총마진", value: `${stock?.gross_margin_ttm?.toFixed(2)}%` },
      {
        label: "영업마진",
        value: `${stock?.operating_margin_ttm?.toFixed(2)}%`,
      },
      {
        label: "세전 마진",
        value: `${stock?.pre_tax_margin_ttm?.toFixed(2)}%`,
      },
      { label: "넷 마진", value: `${stock?.net_margin_ttm?.toFixed(2)}%` },
      {
        label: "FCF 마진",
        value: `${stock?.free_cash_flow_margin_ttm?.toFixed(2)}%`,
      },
      { label: "ROA", value: `${stock?.return_on_assets_fq?.toFixed(2)}%` },
      { label: "ROE", value: `${stock?.return_on_equity_fq?.toFixed(2)}%` },
      {
        label: "투하자본수익률",
        value: `${stock?.return_on_invested_capital_fq?.toFixed(2)}%`,
      },
      {
        label: "R&D 비율",
        value: `${stock?.research_and_dev_ratio_ttm?.toFixed(2)}%`,
      },
      {
        label: "판관비율",
        value: `${stock?.sell_gen_admin_exp_other_ratio_ttm?.toFixed(2)}%`,
      },
    ],
  },
  {
    name: "손익 계산",
    discrption: "회사의 수익과 비용을 요약",
    data: [
      { label: "수입", value: stock?.FundamentalRevenue },
      { label: "매출 성장률", value: `${stock?.PerformanceYear}%` },
      { label: "총수익", value: stock?.gross_margin_ttm?.toString() },
      { label: "영업 수입", value: stock?.operating_margin_ttm?.toString() },
      { label: "순이익", value: stock?.net_margin_ttm?.toString() },
      { label: "세전영업이익", value: stock?.pre_tax_margin_ttm?.toString() },
    ],
  },
  {
    name: "대차 대조표",
    discrption: "회사의 자산, 부채, 자본을 요약",
    data: [
      { label: "자산총액", value: stock?.total_assets_fq },
      { label: "유동자산", value: stock?.total_current_assets_fq },
      { label: "현금", value: stock?.cash_n_short_term_invest_fq },
      { label: "부채 총액", value: stock?.total_liabilities_fq },
      { label: "총부채", value: stock?.total_debt_fq },
      { label: "순부채", value: stock?.net_debt_fq },
      { label: "토탈 에쿼티", value: stock?.total_equity_fq },
      { label: "유동비율", value: stock?.current_ratio_fq },
      { label: "당좌비율", value: stock?.quick_ratio_fq },
      { label: "부채 / 자본", value: stock?.debt_to_equity_fq },
      {
        label: "현금 / 부채",
        value: stock?.cash_n_short_term_invest_to_total_debt_fq,
      },
    ],
  },
  {
    name: "테크니컬즈",
    discrption: "ㅎㅎㅎㅎ",
    data: [
      { label: "기술등급", value: stock?.["Recommend.All"] },
      { label: "MA 레이팅", value: stock?.["Recommend.MA"] },
      { label: "Os 등급", value: stock?.["Recommend.Other"] },
      { label: "RSI", value: stock?.RSI },
      { label: "Mom", value: stock?.Mom },
      { label: "AO", value: stock?.AO },
      { label: "CCI", value: stock?.CCI20 },
      { label: "Stoch.K", value: stock?.StochK },
      { label: "Stoch.D", value: stock?.StochD },
    ],
  },
]);
</script>
<template>
  <div class="h-full flex flex-col bg-white divide-y">
    <div class="flex" v-for="itmes in indicator">
      <div class="flex flex-col px-2 py-1 w-32">
        <div class="w-32 h-full flex font-bold text-lg">
          {{ itmes.name }}
        </div>
        <div class="text-xs text-neutral-400">
          {{ itmes.discrption }}
        </div>
      </div>
      <div class="flex items-center">
        <div
          v-for="item in itmes.data"
          class="h-full px-2 py-1 flex items-center hover:bg-neutral-100 cursor-pointer"
        >
          <div>
            <div class="text-xs text-neutral-400">{{ item.label }}</div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex divide-x w-fit border-r">
        <div class="px-4 py-1">간격</div>
        <div class="px-2 py-1 bg-blue-50">5</div>
        <div class="px-2 py-1">15</div>
        <div class="px-2 py-1">30</div>
        <div class="px-2 py-1">1H</div>
        <div class="px-2 py-1">5H</div>
        <div class="px-2 py-1">1D</div>
        <div class="px-2 py-1">1W</div>
        <div class="px-2 py-1">1M</div>
      </div>
    </div>
    <div class="relative h-44 overflow-hidden py-2 bg-white">
      <LineChart
        class="bg-white h-full w-full z-10"
        :data="data"
        index="date"
        :colors="['#3B82F6']"
        :categories="['시가']"
        :margin="{ top: 0, right: 0, bottom: 0, left: 0 }"
        :show-legend="false"
        :show-x-axis="false"
        :show-y-axis="false"
      />
      <BarChart
        class="absolute bottom-2 left-0 h-20 z-0"
        :data="data"
        index="date"
        :colors="['#3B82F6']"
        :categories="['거래량']"
        :margin="{ top: 0, right: 18, bottom: 0, left: 20 }"
        :show-grid-line="false"
        :show-tooltip="false"
        :show-legend="false"
        :show-x-axis="false"
        :show-y-axis="false"
      />
    </div>
    <div>
      <div class="flex divide-x w-fit border-r">
        <div class="px-4 py-1">범위</div>
        <div class="px-2 py-1 bg-blue-50">일일</div>
        <div class="px-2 py-1">1주</div>
        <div class="px-2 py-1">1달</div>
        <div class="px-2 py-1">3달</div>
        <div class="px-2 py-1">6달</div>
        <div class="px-2 py-1">1년</div>
        <div class="px-2 py-1">5년</div>
        <div class="px-2 py-1">최대</div>
      </div>
    </div>
  </div>
</template>
