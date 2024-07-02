<script setup lang="ts">
const route = useRoute();

const selectedCountry = useState<any>("selectedCountry");

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
  "Recommend.All": number;
  "Recommend.MA": number;
  "Recommend.Other": number;
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

  score: number;
};

const stockList = useState<StockInfo[]>("stockList", () => []);
const intervalId = ref();

onMounted(() => {
  getInvesting();
  intervalId.value = setInterval(getInvesting, 1000 * 60 * 1);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});

const getInvesting = () => {
  fetch(`/api/stock/${route.params.code}`)
    .then((res) => res.json())
    .then((data) => {
      if (data != undefined) {
        stockListAddScore(data);
      } else {
        stockList.value = [];
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

const stockListAddScore = (newStockList: any) => {
  stockList.value = newStockList.map((stock: any) => ({
    ...stock,
    score: getScore(stock),
  }));
};

const condition = ref({
  search: "",
  viewRecentData: false, // 최근 한시간 이내 데이터만
  goodTechnical: false, // 좋은 분석 데이터만
  sorting: "volumeRate",
});

const cStockList = computed(() => {
  if (!Array.isArray(stockList.value)) {
    // 3단계: stockList.value가 배열인지 확인
    console.error("stockList.value is not an array", stockList.value); // 4단계: 디버깅 로그
    return []; // 배열이 아니면 빈 배열 반환
  }

  const oneHourAgo = Date.now() - 3600 * 1000; // Current time minus one hour in milliseconds

  return stockList.value
    .map((stock) => ({
      ...stock,
      volumeRate: Math.round((stock.Volume / stock.AvgVolume) * 100 * 10) / 10,
    }))
    .filter(
      (stock) =>
        !condition.value.viewRecentData ||
        (condition.value.viewRecentData &&
          Number(stock.Time) * 1000 >= oneHourAgo)
    ) // If viewRecentData.value is false, include all stocks
    .filter((stock) => {
      console.log(stock.Name);
      console.log(condition.value.search);
      return stock.Name.toLowerCase().includes(
        condition.value.search.toLowerCase()
      );
    })
    .filter(
      (stock) =>
        !condition.value.goodTechnical ||
        (stock.TechnicalDay == "strong_buy" &&
          stock.TechnicalHour == "strong_buy" && // 기술적 시간당 분석
          stock.TechnicalMonth == "strong_buy" && // 기술적 월간 분석
          stock.TechnicalWeek == "strong_buy") // 기술적 주간 분석
    )
    .sort((a, b) => {
      if (condition.value.sorting === "Name") {
        return a.Name.localeCompare(b.Name);
      } else if (condition.value.sorting === "volumeRate") {
        return b.volumeRate - a.volumeRate;
      } else if (condition.value.sorting === "Chg") {
        return b.Chg - a.Chg;
      } else if (condition.value.sorting === "ChgPct") {
        return b.ChgPct - a.ChgPct;
      }
      return 0;
    });
  //.slice(0, 100);
});

function timeAgo(timestamp: any) {
  const secondsAgo = Math.floor(
    (new Date().getTime() - timestamp * 1000) / 1000
  );
  const hours = Math.floor(secondsAgo / 3600);
  const minutes = Math.floor((secondsAgo % 3600) / 60);
  const seconds = secondsAgo % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} 전`;
}

const onClickCard = (id: string) => {
  const stock = useStock();
  stock.value = stockList.value.find((stock) => stock.Id === id);
  navigateTo(`/stock/${route.params.code}/${id}`);
};

// 점수
const getScore = (stock: any) => {
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
};
</script>

<template>
  <div class="flex divide-x">
    <div class="flex flex-col h-screen divide-y grow-[0] w-full">
      <div
        v-if="selectedCountry"
        class="flex items-center w-full gap-3 px-2 overflow-hidden shrink-0 h-14"
      >
        <StockBar :selectedCountry="selectedCountry" v-model="condition" />
      </div>
      <div class="grow-[0] overflow-hidden flex h-full">
        <div
          class="flex flex-col h-full overflow-y-scroll shrink-0 scrollbar-hide"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead> 종목명 </TableHead>
                <TableHead>종목코드</TableHead>
                <TableHead>점수</TableHead>
                <TableHead>주가수익비율(PER)</TableHead>
                <TableHead>베타</TableHead>
                <TableHead>일일</TableHead>
                <TableHead>주간</TableHead>
                <TableHead>월간</TableHead>
                <TableHead>연간</TableHead>
                <TableHead>일일</TableHead>
                <TableHead>주간</TableHead>
                <TableHead>월간</TableHead>
                <TableHead>연간</TableHead>
                <TableHead>거래량</TableHead>
                <TableHead>변동률</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="stock in cStockList">
                <TableCell> {{ stock.Name }} </TableCell>
                <TableCell>{{ stock.Id }}</TableCell>
                <TableCell>{{ stock.score }}</TableCell>
                <TableCell>{{ stock.FundamentalRatio }}</TableCell>
                <TableCell> {{ stock.FundamentalBeta }} </TableCell>
                <TableCell> {{ stock.PerformanceDay }} </TableCell>
                <TableCell> {{ stock.PerformanceWeek }} </TableCell>
                <TableCell> {{ stock.PerformanceMonth }} </TableCell>
                <TableCell> {{ stock.PerformanceYear }} </TableCell>
                <TableCell> {{ stock.TechnicalHour }} </TableCell>
                <TableCell> {{ stock.TechnicalDay }} </TableCell>
                <TableCell> {{ stock.TechnicalMonth }} </TableCell>
                <TableCell> {{ stock.TechnicalWeek }} </TableCell>
                <TableCell>
                  {{ stock.volumeRate }}% ({{ stock.Volume }} /
                  {{ stock.AvgVolume }})
                </TableCell>
                <TableCell> {{ stock.ChgPct }}% ({{ stock.Chg }}) </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <!-- <Card
            class="p-2 mx-2 my-1 text-xs flex flex-col gap-1 w-[368px]"
            v-for="stock in cStockList"
            :key="stock.Name"
            @click="onClickCard(stock.Id)"
          >
            <div class="flex justify-between gap-2">
              <div class="text-sm max-w-64">
                {{ stock.Name }}
                <Badge variant="outline">{{ stock.Id }}</Badge>
              </div>
              <div class="text-neutral-400">
                {{ timeAgo(Number(stock.Time)) }}
              </div>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <div class="flex items-center gap-1 text-xl font-bold">
                <span class="text-xs font-normal text-neutral-400">종가</span>
                {{ stock.Last }}
              </div>
              <div class="flex items-center gap-1 font-bold text-blue-400">
                <span class="text-xs font-normal text-neutral-400">저가</span>
                {{ stock.Low }}
              </div>
              <div class="flex items-center gap-1 font-bold text-red-400">
                <span class="text-xs font-normal text-neutral-400">고가</span>
                {{ stock.High }}
              </div>
            </div>
            <div class="flex gap-2">
              <div class="flex gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <span class="cursor-pointer text-neutral-400">
                        주가수익비율(PER)
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>낮을수록 저평가</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {{ stock.FundamentalRatio }}
              </div>
              <div class="flex gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <span class="cursor-pointer text-neutral-400">베타</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>베타계수가 1에 가까울 수록 시장과 동일한 선상</p>
                      <p>
                        0으로 갈수록 시장과 관계없이 주가 수익률을 내고 있다는
                        뜻
                      </p>
                      <p>1보다 큰 값들은 시장보다 수익률이 민감하게 반응</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {{ stock.FundamentalBeta }}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-neutral-500">성과</div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">일일</div>
                <div
                  :class="
                    stock.PerformanceDay > 0
                      ? 'text-neutral-700'
                      : 'text-neutral-300'
                  "
                >
                  {{ stock.PerformanceDay }}
                </div>
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">주간</div>
                <div
                  :class="
                    stock.PerformanceWeek > 0
                      ? 'text-neutral-700'
                      : 'text-neutral-300'
                  "
                >
                  {{ stock.PerformanceWeek }}
                </div>
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">월간</div>
                <div
                  :class="
                    stock.PerformanceMonth > 0
                      ? 'text-neutral-700'
                      : 'text-neutral-300'
                  "
                >
                  {{ stock.PerformanceMonth }}
                </div>
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">연간</div>
                <div
                  :class="
                    stock.PerformanceYear > 0
                      ? 'text-neutral-700'
                      : 'text-neutral-300'
                  "
                >
                  {{ stock.PerformanceYear }}
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-neutral-500">분석</div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">시간당</div>
                <TechnicalTextColor :technicalText="stock.TechnicalHour" />
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">일일</div>
                <TechnicalTextColor :technicalText="stock.TechnicalDay" />
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">주간</div>
                <TechnicalTextColor :technicalText="stock.TechnicalMonth" />
              </div>
              <div class="flex items-center gap-1">
                <div class="text-neutral-400">월간</div>
                <TechnicalTextColor :technicalText="stock.TechnicalWeek" />
              </div>
            </div>
            <div class="flex gap-2">
              <div
                class="relative w-full h-5 overflow-hidden rounded bg-neutral-400"
              >
                <div
                  class="absolute top-0 left-0 h-5 rounded bg-neutral-600"
                  :style="{ width: `${stock.volumeRate / 10}%` }"
                ></div>
                <div class="absolute flex items-center h-5 px-2 text-white">
                  거래량 {{ stock.volumeRate }}% ({{ stock.Volume }} /
                  {{ stock.AvgVolume }})
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <div
                class="relative w-full h-5 overflow-hidden rounded bg-neutral-400"
              >
                <div
                  class="absolute top-0 left-0 h-5 rounded bg-neutral-600"
                  :style="{ width: `${stock.ChgPct}%` }"
                ></div>
                <div class="absolute flex items-center h-5 px-2 text-white">
                  변동률 {{ stock.ChgPct }}% ({{ stock.Chg }})
                </div>
              </div>
            </div>
            <div>점수 : {{ stock.score }}</div>
          </Card> -->
        </div>
      </div>
    </div>

    <div class="shrink-0 w-96">
      <div class="p-4 flex flex-col gap-4">
        <div>
          <div>Mode</div>
          <div>
            <Tabs default-value="account" class="w-fit">
              <TabsList class="grid w-full grid-cols-2">
                <TabsTrigger value="account"> Account </TabsTrigger>
                <TabsTrigger value="password"> Password </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div>
          <div>상대적 거래량</div>
          <Slider :default-value="[33]" :max="100" :step="1" />
        </div>
        <div>
          <div>P/E</div>
          <Slider :default-value="[33]" :max="100" :step="1" />
        </div>
        <div>
          <div>볼륨변환율</div>
          <Slider :default-value="[33]" :max="100" :step="1" />
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
