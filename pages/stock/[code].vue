<script setup lang="ts">
const route = useRoute();

const selectedCountry = useState<any>("selectedCountry");
const stockList = useState<any[]>("stockList", () => []);

const exchange = useExchange();
const { count, loading } = useLoading().value;

watch(
  () => [loading.value],
  () => {
    if (loading.value) {
      getInvesting();
    }
  }
);

watch(
  () => exchange.value,
  () => {
    loading.value = true;
    count.value = 0;
  }
);

const getInvesting = () => {
  if (exchange.value == undefined) {
    loading.value = false;
    count.value = 60;
    return;
  }

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
    })
    .finally(() => {
      loading.value = false;
      count.value = 60;
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

const windowLayout = useWindowLayout();
</script>

<template>
  <div class="flex divide-x">
    <div class="flex flex-col h-screen divide-y grow-[0] overflow-hidden">
      <div
        v-if="selectedCountry"
        class="flex items-center w-full gap-3 px-2 overflow-hidden shrink-0 h-14"
      >
        <StockBar :selectedCountry="selectedCountry" v-model="condition" />
      </div>
      <div class="grow-[0] flex h-full divide-x">
        <div class="grow-[0] overflow-scroll scrollbar-hide h-full">
          <div class="whitespace-nowrap">
            <Table>
              <TableHeader class="sticky top-0">
                <TableRow>
                  <TableHead>종목명</TableHead>
                  <TableHead>종목코드</TableHead>
                  <TableHead>점수</TableHead>
                  <TableHead>섹터</TableHead>
                  <TableHead>산업</TableHead>
                  <TableHead>거래량</TableHead>
                  <TableHead>변동률</TableHead>

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
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="stock in stockList">
                  <TableCell> {{ stock.viewData.name }} </TableCell>
                  <TableCell>{{ stock.viewData.symbol }}</TableCell>
                  <TableCell>{{ stock.score }}</TableCell>
                  <TableCell>{{ stock.sector_trans }}</TableCell>
                  <TableCell>{{ stock.industry_trans }}</TableCell>
                  <TableCell>
                    {{ stock.volumeRate }}% ({{ stock.turnover_volume }} /
                    {{ stock.avg_volume }})
                  </TableCell>
                  <TableCell> {{ stock.daily }}%</TableCell>

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
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div
          class="flex h-full overflow-scroll w-[453px] scrollbar-hide"
          v-if="windowLayout.interest"
        >
          <div class="whitespace-nowrap">
            <Table>
              <TableHeader class="sticky top-0">
                <TableRow>
                  <TableHead>종목명</TableHead>
                  <TableHead>종목코드</TableHead>
                  <TableHead>점수</TableHead>
                  <TableHead>변동률</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="stock in stockList">
                  <TableCell> {{ stock.viewData.name }} </TableCell>
                  <TableCell>{{ stock.viewData.symbol }}</TableCell>
                  <TableCell>{{ stock.score }}</TableCell>
                  <TableCell> {{ stock.daily }}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
    <div class="w-48 shrink-0" v-if="windowLayout.layout == 'all'">
      <Controller v-model="controller" />
    </div>
  </div>
</template>
