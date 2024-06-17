type StockInfo = {
  AvgVolume: number;
  Chg: number;
  ChgPct: number;
  CountryNameTranslated: string;
  ExchangeId: string;
  Flag: string;
  FundamentalBeta: number;
  FundamentalMarketCap: number;
  FundamentalRatio: number;
  FundamentalRevenue: string;
  High: number;
  Id: string;
  IsCFD: string;
  IsOpen: string;
  Last: number;
  LastPairDecimal: number;
  Low: number;
  Name: string;
  PairType: string;
  Performance3Year: number;
  PerformanceDay: number;
  PerformanceMonth: number;
  PerformanceWeek: number;
  PerformanceYear: number;
  PerformanceYtd: number;
  Symbol: string;
  TechnicalDay: string;
  TechnicalHour: string;
  TechnicalMonth: string;
  TechnicalWeek: string;
  Time: string;
  Url: string;
  Volume: number;
  name: string;
  description: string;
  logoid: string;
  update_mode: string;
  type: string;
  close: number;
  pricescale: number;
  minmov: number;
  fractional: string;
  minmove2: number;
  currency: string;
  change: number;
  volume: number;
  relative_volume_10d_calc: number;
  market_cap_basic: number;
  fundamental_currency_code: string;
  price_earnings_ttm: number;
  earnings_per_share_diluted_ttm: number;
  earnings_per_share_diluted_yoy_growth_ttm: number;
  dividends_yield_current: number;
  sector_tr: string;
  market: string;
  sector: string;
  recommendation_mark: number;
  exchange: string;
  "Perf.W": number;
  "Perf.1M": number;
  "Perf.3M": number;
  "Perf.6M": number;
  "Perf.YTD": number;
  "Perf.Y": number;
  "Perf.5Y": number;
  "Perf.10Y": number;
  "Perf.All": number;
  "Volatility.W": number;
  "Volatility.M": number;
  premarket_close: null | number;
  premarket_change: null | number;
  premarket_gap: null | number;
  premarket_volume: null | number;
  gap: number;
  volume_change: number;
  postmarket_close: null | number;
  postmarket_change: null | number;
  postmarket_volume: null | number;
  "Perf.1Y.MarketCap": number;
  price_earnings_growth_ttm: null | number;
  price_sales_current: number;
  price_book_fq: number;
  price_to_cash_f_operating_activities_ttm: number;
  price_free_cash_flow_ttm: null | number;
  price_to_cash_ratio: number;
  enterprise_value_current: number;
  enterprise_value_to_revenue_ttm: number;
  enterprise_value_to_ebit_ttm: number;
  enterprise_value_ebitda_ttm: number;
  dps_common_stock_prim_issue_fy: number;
  dps_common_stock_prim_issue_fq: null | number;
  dividends_yield: number;
  dividend_payout_ratio_ttm: number;
  dps_common_stock_prim_issue_yoy_growth_fy: number;
  continuous_dividend_payout: number;
  continuous_dividend_growth: number;
  gross_margin_ttm: number;
  operating_margin_ttm: number;
  pre_tax_margin_ttm: number;
  net_margin_ttm: number;
  free_cash_flow_margin_ttm: number;
  return_on_assets_fq: number;
  return_on_equity_fq: number;
  return_on_invested_capital_fq: number;
  research_and_dev_ratio_ttm: number;
  sell_gen_admin_exp_other_ratio_ttm: number;
  total_assets_fq: number;
  total_current_assets_fq: number;
  cash_n_short_term_invest_fq: number;
  total_liabilities_fq: number;
  total_debt_fq: number;
  net_debt_fq: number;
  total_equity_fq: number;
  current_ratio_fq: number;
  quick_ratio_fq: number;
  debt_to_equity_fq: number;
  cash_n_short_term_invest_to_total_debt_fq: number;
  cash_f_operating_activities_ttm: number;
  cash_f_investing_activities_ttm: number;
  cash_f_financing_activities_ttm: number;
  free_cash_flow_ttm: number;
  capital_expenditures_ttm: number;
  RecommendAll: number;
  RecommendMA: number;
  RecommendOther: number;
  RSI: number;
  Mom: number;
  AO: number;
  CCI20: number;
  StochK: number;
  StochD: number;
  Candle3BlackCrows: number;
  Candle3WhiteSoldiers: number;
  CandleAbandonedBabyBearish: number;
  CandleAbandonedBabyBullish: number;
  CandleDoji: number;
  CandleDojiDragonfly: number;
  CandleDojiGravestone: number;
  CandleEngulfingBearish: number;
  CandleEngulfingBullish: number;
  CandleEveningStar: number;
  CandleHammer: number;
  CandleHangingMan: number;
  CandleHaramiBearish: number;
  CandleHaramiBullish: number;
  CandleInvertedHammer: number;
  CandleKickingBearish: number;
  CandleKickingBullish: number;
  CandleLongShadowLower: number;
  CandleLongShadowUpper: number;
  CandleMarubozuBlack: number;
  CandleMarubozuWhite: number;
  CandleMorningStar: number;
  CandleShootingStar: number;
  CandleSpinningTopBlack: number;
  CandleSpinningTopWhite: number;
  CandleTriStarBearish: number;
  CandleTriStarBullish: number;
};

export const useStock = () => useState<StockInfo>("stock");
