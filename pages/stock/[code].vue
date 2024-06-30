<script setup lang="ts">
const route = useRoute();

const selectedCountry = useState<any>("selectedCountry");

type Stock = {
  AvgVolume: number; // 평균 거래량
  Chg: number; // 변동치
  ChgPct: number; // 변동률 (%)
  CountryNameTranslated: string; // 국가 이름 (번역)
  ExchangeId: string; // 거래소 ID
  Flag: string; // 국기
  FundamentalBeta: number; // 기본 베타
  FundamentalMarketCap: number; // 기본 시가 총액
  FundamentalRatio: number; // 기본 비율
  FundamentalRevenue: string; // 기본 수익
  High: number; // 최고가
  Id: string; // ID
  IsCFD: string; // CFD 여부
  IsOpen: string; // 개장 여부
  Last: number; // 마지막 가격
  LastPairDecimal: number; // 마지막 쌍 소수점
  Low: number; // 최저가
  Name: string; // 이름
  PairType: string; // 쌍 타입
  Performance3Year: number; // 3년 성과
  PerformanceDay: number; // 일일 성과
  PerformanceMonth: number; // 월간 성과
  PerformanceWeek: number; // 주간 성과
  PerformanceYear: number; // 연간 성과
  PerformanceYtd: number; // 연초부터 현재까지의 성과
  Symbol: string; // 심볼
  TechnicalDay: string; // 기술적 일일 분석
  TechnicalHour: string; // 기술적 시간당 분석
  TechnicalMonth: string; // 기술적 월간 분석
  TechnicalWeek: string; // 기술적 주간 분석
  Time: string; // 시간
  Url: string; // URL
  Volume: number; // 거래량
};

const stockList = useState<Stock[]>("stockList", () => []);
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
        stockList.value = data;
      } else {
        stockList.value = [];
      }
    })
    .catch((e) => {
      console.error(e);
    });
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
    })
    .slice(0, 100);
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
</script>

<template>
  <div class="flex divide-x">
    <div class="flex flex-col h-screen divide-y shrink-0 w-96">
      <div
        v-if="selectedCountry"
        class="flex items-center w-full gap-3 px-2 overflow-hidden shrink-0 h-14"
      >
        <StockBar :selectedCountry="selectedCountry" v-model="condition" />
      </div>
      <div class="grow-[0] overflow-hidden flex h-full">
        <div
          class="flex flex-col h-full py-1 overflow-y-scroll shrink-0 scrollbar-hide"
        >
          <Card
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
          </Card>
        </div>
      </div>
    </div>

    <div class="grow-[0] overflow-hidden w-full">
      <NuxtPage />
    </div>
  </div>
</template>
