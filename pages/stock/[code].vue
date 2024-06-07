<script setup lang="ts">
const route = useRoute();

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
const progressIntervalId = ref();
const progress = ref(0);

onMounted(() => {
  getInvesting();
  intervalId.value = setInterval(getInvesting, 1000 * 60 * 1);
  progressIntervalId.value = setInterval(() => {
    progress.value += (1 / 60) * 100;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
  clearInterval(progressIntervalId.value);
});

const getInvesting = () => {
  fetch(`/api/investing/${route.params.code}`)
    .then((res) => res.json())
    .then((data) => {
      if (data?.data != undefined) {
        stockList.value = data.data;
      } else {
        stockList.value = [];
      }
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      progress.value = 0;
    });
};

const sorting = ref("Name");
const search = ref("");
const viewRecentData = ref(false); // 최근 한시간 이내 데이터만
// 좋은 성과 데이터만
// 좋은 분석 데이터만

const cStockList = computed(() => {
  const oneHourAgo = Date.now() - 3600 * 1000; // Current time minus one hour in milliseconds

  return stockList.value
    .map((stock) => ({
      ...stock,
      volumeRate: Math.round((stock.Volume / stock.AvgVolume) * 100 * 10) / 10,
    }))
    .filter((stock) => !viewRecentData.value || (viewRecentData.value && Number(stock.Time) * 1000 >= oneHourAgo)) // If viewRecentData.value is false, include all stocks
    .filter((stock) => stock.Name.toLowerCase().includes(search.value.toLowerCase()))
    .sort((a, b) => {
      if (sorting.value === "Name") {
        return a.Name.localeCompare(b.Name);
      } else if (sorting.value === "volumeRate") {
        return b.volumeRate - a.volumeRate;
      } else if (sorting.value === "Chg") {
        return b.Chg - a.Chg;
      } else if (sorting.value === "ChgPct") {
        return b.ChgPct - a.ChgPct;
      }
      return 0;
    })
    .slice(0, 100);
});

function timeAgo(timestamp: any) {
  const secondsAgo = Math.floor((new Date().getTime() - timestamp * 1000) / 1000);
  const hours = Math.floor(secondsAgo / 3600);
  const minutes = Math.floor((secondsAgo % 3600) / 60);
  const seconds = secondsAgo % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} 전`;
}
</script>

<template>
  <div class="flex flex-col divide-y">
    <div class="h-1 bg-neutral-200">
      <div class="bg-red-500 h-1" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="flex divide-x border-r w-fit">
      <div class="px-4 py-2 bg-neutral-100">
        <input class="bg-neutral-100 focus:outline-none" type="text" v-model="search" placeholder="search" />
      </div>
      <div class="px-4 py-2 text-neutral-400 flex items-center gap-2"><Switch id="airplane-mode" @click="viewRecentData = !viewRecentData" />최근 한시간 이내 데이터만</div>
    </div>
    <Table class="border-b">
      <TableHeader>
        <TableRow class="text-xs">
          <TableHead>나라</TableHead>
          <TableHead @click="sorting = 'Name'" class="cursor-pointer font-bold">
            이름
            <font-awesome-icon :icon="['fas', sorting == 'Name' ? 'sort-down' : 'sort']" />
          </TableHead>
          <TableHead @click="sorting = 'volumeRate'" class="cursor-pointer font-bold">
            거래량 / 평균 거래량 (거래량률)
            <font-awesome-icon :icon="['fas', sorting == 'volumeRate' ? 'sort-down' : 'sort']" />
          </TableHead>
          <TableHead @click="sorting = 'Chg'" class="cursor-pointer font-bold">변동치<font-awesome-icon :icon="['fas', sorting == 'Chg' ? 'sort-down' : 'sort']" /></TableHead>
          <TableHead @click="sorting = 'ChgPct'" class="cursor-pointer font-bold"> 변동률 (%) <font-awesome-icon :icon="['fas', sorting == 'ChgPct' ? 'sort-down' : 'sort']" /></TableHead>
          <TableHead class="font-bold"> 가격 (최저,마지막,최고) </TableHead>
          <TableHead class="font-bold"> 성과 (일일,주간,월간,연간) </TableHead>
          <TableHead class="font-bold"> 분석 (시간당,일일,주간,월간) </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="stock in cStockList" :key="stock.Name">
          <TableCell> {{ stock.CountryNameTranslated }}</TableCell>
          <TableCell class="font-bold">
            <div>
              {{ stock.Name }}
            </div>
            <div>({{ timeAgo(Number(stock.Time)) }})</div>
          </TableCell>
          <TableCell>
            <div class="text-xs text-neutral-400">{{ stock.Volume }}</div>
            <div class="text-xs text-neutral-400">/ {{ stock.AvgVolume }}</div>
            <div>{{ stock.volumeRate }}%</div>
          </TableCell>
          <TableCell>{{ stock.Chg }}</TableCell>
          <TableCell>
            {{ stock.ChgPct }}
          </TableCell>
          <TableCell>
            <div class="text-xs text-neutral-400">{{ stock.Low }} ~</div>
            <div>{{ stock.Last }} ~</div>
            <div class="text-xs text-neutral-400">{{ stock.High }}</div>
          </TableCell>
          <TableCell>
            <div :class="stock.PerformanceDay > 0 ? 'text-red-500' : 'text-blue-500'">{{ stock.PerformanceDay }} /</div>
            <div :class="stock.PerformanceWeek > 0 ? 'text-red-500' : 'text-blue-500'">{{ stock.PerformanceWeek }} /</div>
            <div :class="stock.PerformanceMonth > 0 ? 'text-red-500' : 'text-blue-500'">{{ stock.PerformanceMonth }} /</div>
            <div :class="stock.PerformanceYear > 0 ? 'text-red-500' : 'text-blue-500'">
              {{ stock.PerformanceYear }}
            </div>
          </TableCell>
          <TableCell>
            <div><TechnicalTextColor :technicalText="stock.TechnicalHour" /> /</div>
            <div><TechnicalTextColor :technicalText="stock.TechnicalDay" /> /</div>
            <div><TechnicalTextColor :technicalText="stock.TechnicalMonth" /> /</div>
            <div>
              <TechnicalTextColor :technicalText="stock.TechnicalWeek" />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
