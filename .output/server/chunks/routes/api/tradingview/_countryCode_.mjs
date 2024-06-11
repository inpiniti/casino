import { d as defineEventHandler, g as getRouterParam, u as useAppConfig } from '../../../runtime.mjs';
import { getKoreaTime } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'puppeteer';
import 'querystring';

const appConfig = useAppConfig();
const codeList = appConfig.codeList;
const _countryCode_ = defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");
  console.log(`[${getKoreaTime()}] tradingview`);
  const result = updateStore(String(countryCode));
  console.log(`[${getKoreaTime()}] tradingview return`);
  return result;
});
async function updateStore(countryCode) {
  try {
    const \uC624\uBC84\uBDF0 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "close",
      // 종가
      "pricescale",
      // 가격 척도
      "minmov",
      // 최소 이동
      "fractional",
      // 분수
      "minmove2",
      // 최소 이동 2
      "currency",
      // 통화
      "change",
      // 변화
      "volume",
      // 거래량
      "relative_volume_10d_calc",
      // 10일 상대 거래량 계산
      "market_cap_basic",
      // 기본 시장 규모
      "fundamental_currency_code",
      // 기본 통화 코드
      "price_earnings_ttm",
      // 시가 총액 대비 이익(TTM)
      "earnings_per_share_diluted_ttm",
      // 주당 순이익(TTM, 희석)
      "earnings_per_share_diluted_yoy_growth_ttm",
      // 주당 순이익 연간 성장률(TTM, 희석)
      "dividends_yield_current",
      // 현재 배당 수익률
      "sector.tr",
      // TR 섹터
      "market",
      // 시장
      "sector",
      // 섹터
      "recommendation_mark",
      // 추천 마크
      "exchange"
      // 거래소
    ];
    const \uC131\uACFC = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "close",
      // 종가
      "pricescale",
      // 가격 척도
      "minmov",
      // 최소 이동
      "fractional",
      // 분수
      "minmove2",
      // 최소 이동 2
      "currency",
      // 통화
      "change",
      // 변화
      "Perf.W",
      // 주간 성과
      "Perf.1M",
      // 1개월 성과
      "Perf.3M",
      // 3개월 성과
      "Perf.6M",
      // 6개월 성과
      "Perf.YTD",
      // 연초부터 현재까지의 성과
      "Perf.Y",
      // 1년 성과
      "Perf.5Y",
      // 5년 성과
      "Perf.10Y",
      // 10년 성과
      "Perf.All",
      // 전체 성과
      "Volatility.W",
      // 주간 변동성
      "Volatility.M",
      // 월간 변동성
      "exchange"
      // 거래소
    ];
    const \uC2DC\uAC04\uC678 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "premarket_close",
      // 시장 개장 전 종가
      "pricescale",
      // 가격 척도
      "minmov",
      // 최소 이동
      "fractional",
      // 분수
      "minmove2",
      // 최소 이동 2
      "currency",
      // 통화
      "premarket_change",
      // 시장 개장 전 변동
      "premarket_gap",
      // 시장 개장 전 갭
      "premarket_volume",
      // 시장 개장 전 거래량
      "close",
      // 종가
      "change",
      // 변화
      "gap",
      // 갭
      "volume",
      // 거래량
      "volume_change",
      // 거래량 변동
      "postmarket_close",
      // 시장 폐장 후 종가
      "postmarket_change",
      // 시장 폐장 후 변동
      "postmarket_volume",
      // 시장 폐장 후 거래량
      "exchange"
      // 거래소
    ];
    const \uD3C9\uAC00 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "market_cap_basic",
      // 기본 시장 규모
      "fundamental_currency_code",
      // 기본 통화 코드
      "Perf.1Y.MarketCap",
      // 1년 시장 규모 성과
      "price_earnings_ttm",
      // 시가 총액 대비 이익(TTM)
      "price_earnings_growth_ttm",
      // 시가 총액 대비 이익 성장(TTM)
      "price_sales_current",
      // 현재 매출 대비 가격
      "price_book_fq",
      // 분기별 자산 대비 가격
      "price_to_cash_f_operating_activities_ttm",
      // 영업 활동으로 인한 현금 흐름 대비 가격(TTM)
      "price_free_cash_flow_ttm",
      // 자유 현금 흐름 대비 가격(TTM)
      "price_to_cash_ratio",
      // 현금 대비 가격 비율
      "enterprise_value_current",
      // 현재 기업 가치
      "enterprise_value_to_revenue_ttm",
      // 수익 대비 기업 가치(TTM)
      "enterprise_value_to_ebit_ttm",
      // EBIT 대비 기업 가치(TTM)
      "enterprise_value_ebitda_ttm",
      // EBITDA 대비 기업 가치(TTM)
      "exchange"
      // 거래소
    ];
    const \uBC30\uB2F9 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "dps_common_stock_prim_issue_fy",
      // 주식 기본 발행 DPS(연간)
      "fundamental_currency_code",
      // 기본 통화 코드
      "dps_common_stock_prim_issue_fq",
      // 주식 기본 발행 DPS(분기별)
      "dividends_yield_current",
      // 현재 배당 수익률
      "dividends_yield",
      // 배당 수익률
      "dividend_payout_ratio_ttm",
      // 배당 지급 비율(TTM)
      "dps_common_stock_prim_issue_yoy_growth_fy",
      // 주식 기본 발행 DPS 연간 성장률(FY)
      "continuous_dividend_payout",
      // 연속 배당 지급
      "continuous_dividend_growth",
      // 연속 배당 성장
      "exchange"
      // 거래소
    ];
    const \uC218\uC775\uC131 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "gross_margin_ttm",
      // 총 마진(TTM)
      "operating_margin_ttm",
      // 운영 마진(TTM)
      "pre_tax_margin_ttm",
      // 세전 마진(TTM)
      "net_margin_ttm",
      // 순 마진(TTM)
      "free_cash_flow_margin_ttm",
      // 자유 현금 흐름 마진(TTM)
      "return_on_assets_fq",
      // 자산 대비 수익률(분기별)
      "return_on_equity_fq",
      // 자본 대비 수익률(분기별)
      "return_on_invested_capital_fq",
      // 투자된 자본 대비 수익률(분기별)
      "research_and_dev_ratio_ttm",
      // 연구 개발 비율(TTM)
      "sell_gen_admin_exp_other_ratio_ttm",
      // 판매, 일반 및 관리 비용 비율(TTM)
      "exchange"
      // 거래소
    ];
    const \uC190\uC775\uACC4\uC0B0 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "gross_margin_ttm",
      // 총 마진(TTM)
      "operating_margin_ttm",
      // 운영 마진(TTM)
      "pre_tax_margin_ttm",
      // 세전 마진(TTM)
      "net_margin_ttm",
      // 순 마진(TTM)
      "free_cash_flow_margin_ttm",
      // 자유 현금 흐름 마진(TTM)
      "return_on_assets_fq",
      // 자산 대비 수익률(분기별)
      "return_on_equity_fq",
      // 자본 대비 수익률(분기별)
      "return_on_invested_capital_fq",
      // 투자된 자본 대비 수익률(분기별)
      "research_and_dev_ratio_ttm",
      // 연구 개발 비율(TTM)
      "sell_gen_admin_exp_other_ratio_ttm",
      // 판매, 일반 및 관리 비용 비율(TTM)
      "exchange"
      // 거래소
    ];
    const \uB300\uCC28\uB300\uC870\uD45C = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "total_assets_fq",
      // 총 자산(분기별)
      "fundamental_currency_code",
      // 기본 통화 코드
      "total_current_assets_fq",
      // 총 유동 자산(분기별)
      "cash_n_short_term_invest_fq",
      // 현금 및 단기 투자(분기별)
      "total_liabilities_fq",
      // 총 부채(분기별)
      "total_debt_fq",
      // 총 부채(분기별)
      "net_debt_fq",
      // 순 부채(분기별)
      "total_equity_fq",
      // 총 자본(분기별)
      "current_ratio_fq",
      // 유동비율(분기별)
      "quick_ratio_fq",
      // 당좌비율(분기별)
      "debt_to_equity_fq",
      // 부채 대 자본 비율(분기별)
      "cash_n_short_term_invest_to_total_debt_fq",
      // 현금 및 단기 투자 대 총 부채 비율(분기별)
      "exchange"
      // 거래소
    ];
    const \uD604\uAE08\uD750\uB984 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "cash_f_operating_activities_ttm",
      // 운영 활동으로 인한 현금 흐름(TTM)
      "fundamental_currency_code",
      // 기본 통화 코드
      "cash_f_investing_activities_ttm",
      // 투자 활동으로 인한 현금 흐름(TTM)
      "cash_f_financing_activities_ttm",
      // 재무 활동으로 인한 현금 흐름(TTM)
      "free_cash_flow_ttm",
      // 자유 현금 흐름(TTM)
      "capital_expenditures_ttm",
      // 자본 지출(TTM)
      "exchange"
      // 거래소
    ];
    const \uD14C\uD06C\uB2C8\uCEEC\uC988 = [
      "name",
      // 이름
      "description",
      // 설명
      "logoid",
      // 로고 ID
      "update_mode",
      // 업데이트 모드
      "type",
      // 유형
      "typespecs",
      // 유형 사양
      "Recommend.All",
      // 모든 추천
      "Recommend.MA",
      // 이동 평균 추천
      "Recommend.Other",
      // 기타 추천
      "RSI",
      // 상대 강도 지수
      "Mom",
      // 모멘텀
      "pricescale",
      // 가격 척도
      "minmov",
      // 최소 이동
      "fractional",
      // 분수
      "minmove2",
      // 최소 이동 2
      "AO",
      // 놀람의 오실레이터
      "CCI20",
      // 상품 채널 지수 20
      "Stoch.K",
      // 스토캐스틱 K
      "Stoch.D",
      // 스토캐스틱 D
      "Candle.3BlackCrows",
      // 3 검은 까마귀 캔들
      "Candle.3WhiteSoldiers",
      // 3 흰 병사 캔들
      "Candle.AbandonedBaby.Bearish",
      // 버려진 아기 곰팡이 캔들
      "Candle.AbandonedBaby.Bullish",
      // 버려진 아기 황소 캔들
      "Candle.Doji",
      // 도지 캔들
      "Candle.Doji.Dragonfly",
      // 도지 잠자리 캔들
      "Candle.Doji.Gravestone",
      // 도지 묘비 캔들
      "Candle.Engulfing.Bearish",
      // 포식 곰팡이 캔들
      "Candle.Engulfing.Bullish",
      // 포식 황소 캔들
      "Candle.EveningStar",
      // 저녁 별 캔들
      "Candle.Hammer",
      // 망치 캔들
      "Candle.HangingMan",
      // 매달린 사람 캔들
      "Candle.Harami.Bearish",
      // 하라미 곰팡이 캔들
      "Candle.Harami.Bullish",
      // 하라미 황소 캔들
      "Candle.InvertedHammer",
      // 뒤집힌 망치 캔들
      "Candle.Kicking.Bearish",
      // 킥 곰팡이 캔들
      "Candle.Kicking.Bullish",
      // 킥 황소 캔들
      "Candle.LongShadow.Lower",
      // 긴 그림자 하단 캔들
      "Candle.LongShadow.Upper",
      // 긴 그림자 상단 캔들
      "Candle.Marubozu.Black",
      // 마루보즈 검은 캔들
      "Candle.Marubozu.White",
      // 마루보즈 흰 캔들
      "Candle.MorningStar",
      // 아침 별 캔들
      "Candle.ShootingStar",
      // 별똥별 캔들
      "Candle.SpinningTop.Black",
      // 회전하는 꼭대기 검은 캔들
      "Candle.SpinningTop.White",
      // 회전하는 꼭대기 흰 캔들
      "Candle.TriStar.Bearish",
      // 트라이스타 곰팡이 캔들
      "Candle.TriStar.Bullish",
      // 트라이스타 황소 캔들
      "exchange"
      // 거래소
    ];
    const columns = Array.from(/* @__PURE__ */ new Set([...\uC624\uBC84\uBDF0, ...\uC131\uACFC, ...\uC2DC\uAC04\uC678, ...\uD3C9\uAC00, ...\uBC30\uB2F9, ...\uC218\uC775\uC131, ...\uC190\uC775\uACC4\uC0B0, ...\uB300\uCC28\uB300\uC870\uD45C, ...\uD604\uAE08\uD750\uB984, ...\uD14C\uD06C\uB2C8\uCEEC\uC988]));
    console.log(`[${getKoreaTime()}] tradingview fetch start`);
    const response = await fetch(`https://scanner.tradingview.com/${codeList[countryCode]}/scan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        columns,
        ignore_unknown_fields: false,
        options: { lang: codeList[countryCode] },
        range: [0, 2692],
        sort: { sortBy: "market_cap_basic", sortOrder: "desc" },
        symbols: {},
        markets: ["korea"],
        filter2: {
          operator: "and",
          operands: [
            {
              operation: {
                operator: "or",
                operands: [
                  {
                    operation: {
                      operator: "and",
                      operands: [
                        {
                          expression: {
                            left: "type",
                            operation: "equal",
                            right: "stock"
                          }
                        },
                        {
                          expression: {
                            left: "typespecs",
                            operation: "has",
                            right: ["common"]
                          }
                        }
                      ]
                    }
                  },
                  {
                    operation: {
                      operator: "and",
                      operands: [
                        {
                          expression: {
                            left: "type",
                            operation: "equal",
                            right: "stock"
                          }
                        },
                        {
                          expression: {
                            left: "typespecs",
                            operation: "has",
                            right: ["preferred"]
                          }
                        }
                      ]
                    }
                  },
                  {
                    operation: {
                      operator: "and",
                      operands: [
                        {
                          expression: {
                            left: "type",
                            operation: "equal",
                            right: "dr"
                          }
                        }
                      ]
                    }
                  },
                  {
                    operation: {
                      operator: "and",
                      operands: [
                        {
                          expression: {
                            left: "type",
                            operation: "equal",
                            right: "fund"
                          }
                        },
                        {
                          expression: {
                            left: "typespecs",
                            operation: "has_none_of",
                            right: ["etf"]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log(`[${getKoreaTime()}] tradingview parsing start`);
    return responseJson.data.map((item) => {
      let obj = {};
      for (let i = 0; i < columns.length; i++) {
        obj[columns[i]] = item.d[i];
      }
      return obj;
    });
  } catch (error) {
    console.error(error);
    return error;
  } finally {
  }
}

export { _countryCode_ as default };
//# sourceMappingURL=_countryCode_.mjs.map
