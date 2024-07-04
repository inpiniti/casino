<script setup lang="ts">
const route = useRoute();

const selectedCountry = useState<any>("selectedCountry");
const exchange = useExchange();

const stockList = useState<any[]>("stockList", () => []);
const intervalId = ref();

onMounted(() => {
  getInvesting();
  intervalId.value = setInterval(getInvesting, 1000 * 60 * 1);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});

const getInvesting = () => {
  if (exchange.value == undefined) return;

  fetch(`/api/stock/${route.params.code}/${exchange.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(controller.value),
  })
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

const controller = ref({
  relative_volume_10d_calc: [3],
  price_earnings_ttm: [1],
  earnings_per_share_diluted_yoy_growth_ttm: [1],
  return_on_equity_fq: [1],
  gap: [3],
  volume_change: [3],
  marketCap: [3],
  gross_margin_ttm: [3],
  operating_margin_ttm: [3],
});
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
                <TableHead>종목명</TableHead>
                <TableHead>종목코드</TableHead>
                <TableHead>점수</TableHead>
                <TableHead>섹터</TableHead>
                <TableHead>산업</TableHead>

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
              <TableRow v-for="stock in stockList">
                <TableCell> {{ stock.viewData.name }} </TableCell>
                <TableCell>{{ stock.viewData.symbol }}</TableCell>
                <TableCell>{{ stock.score }}</TableCell>
                <TableCell>{{ stock.sector_trans }}</TableCell>
                <TableCell>{{ stock.industry_trans }}</TableCell>

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
                  {{ stock.volumeRate }}% ({{ stock.turnover_volume }} /
                  {{ stock.avg_volume }})
                </TableCell>
                <TableCell> {{ stock.daily }}%</TableCell>
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

    <div class="w-48 shrink-0">
      <Controller v-model="controller" />
      <NuxtPage />
    </div>
  </div>
</template>
