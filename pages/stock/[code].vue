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

onMounted(() => {
  getInvesting();
  intervalId.value = setInterval(getInvesting, 1000 * 60 * 1);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
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
    });
};

const cStockList = computed(() => {
  return stockList.value
    .map((stock) => ({
      ...stock,
      volumeRate: Math.round((stock.Volume / stock.AvgVolume) * 100 * 10) / 10,
    }))
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

const sorting = ref("Name");

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
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>나라</TableHead>
        <TableHead
          @click="sorting = 'Name'"
          class="text-blue-500 cursor-pointer font-bold"
          :class="{ 'text-red-500': sorting == 'Name' }"
        >
          이름
        </TableHead>
        <TableHead
          @click="sorting = 'volumeRate'"
          class="text-blue-500 cursor-pointer font-bold"
          :class="{ 'text-red-500': sorting == 'volumeRate' }"
          >거래량 / 평균 거래량 (거래량률)</TableHead
        >
        <TableHead
          @click="sorting = 'Chg'"
          class="text-blue-500 cursor-pointer font-bold"
          :class="{ 'text-red-500': sorting == 'Chg' }"
          >변동치</TableHead
        >
        <TableHead
          @click="sorting = 'ChgPct'"
          class="text-blue-500 cursor-pointer font-bold"
          :class="{ 'text-red-500': sorting == 'ChgPct' }"
        >
          변동률 (%)
        </TableHead>
        <TableHead class="font-bold"> 최저가 ~ 마지막가격 ~ 최고가 </TableHead>
        <TableHead class="font-bold">
          일일성과 주간성과 월간성과 연간성과
        </TableHead>
        <TableHead class="font-bold">
          시간당분석 일일분석 주간분석 월간분석
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="stock in cStockList" :key="stock.Name">
        <TableCell> {{ stock.CountryNameTranslated }}</TableCell>
        <TableCell class="font-bold">
          {{ stock.Name }} ({{ timeAgo(Number(stock.Time)) }})
        </TableCell>
        <TableCell
          >{{ stock.Volume }} / {{ stock.AvgVolume }} ({{
            stock.volumeRate
          }})</TableCell
        >
        <TableCell>{{ stock.Chg }}</TableCell>
        <TableCell>
          {{ stock.ChgPct }}
        </TableCell>
        <TableCell>
          {{ stock.Low }} ~ {{ stock.Last }} ~ {{ stock.High }}
        </TableCell>
        <TableCell>
          {{ stock.PerformanceDay }} / {{ stock.PerformanceWeek }} /
          {{ stock.PerformanceMonth }} / {{ stock.PerformanceYear }}</TableCell
        >
        <TableCell>
          <TechnicalTextColor :technicalText="stock.TechnicalHour" />
          / <TechnicalTextColor :technicalText="stock.TechnicalDay" /> /
          <TechnicalTextColor :technicalText="stock.TechnicalMonth" /> /
          <TechnicalTextColor :technicalText="stock.TechnicalWeek" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
