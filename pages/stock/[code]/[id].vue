<script setup lang="ts">
import { onMounted, ref } from "vue";

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
  return rawData.map((item: any) => {
    const date = new Date(item[0]);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return {
      date: `${hour}:${minute}`,
      시가: item[1],
      거래량: item[5],
    };
  });
};

const indicator = ref([
  {
    name: "오버뷰",
    discrption: "종목의 전반을 나타내는 개요 정보입니다.",
    data: [
      { label: "종목명", value: "LG 전자" },
      { label: "현재가", value: "100,700" },
      { label: "현재가", value: "+0.00%" },
      { label: "변화 %", value: "+2.27%" },
      { label: "거래량", value: "1,731 M" },
      { label: "상대적 거래량", value: "1.15" },
      { label: "시가총액", value: "507.46 T KRW" },
      { label: "P/E", value: "21.76" },
      { label: "EPS 희석 순마진", value: "2899.18 KRW" },
      { label: "EPS 희석 성장 TTM YoY", value: "-56.24%" },
      { label: "배당 수익% 순마진", value: "2.34%" },
      { label: "섹터", value: "전자 기술" },
      { label: "애널리스트 평점", value: "스트롱 바이" },
    ],
  },
  {
    name: "성과",
    data: [
      { label: "포퍼먼스 % 1주", value: "0.00%" },
      { label: "포퍼먼스 % 1달", value: "-2.47%" },
      { label: "포퍼먼스 % 3달", value: "-0.16%" },
      { label: "포퍼먼스 % 6달", value: "+5.34%" },
      { label: "퍼포먼스 YTD", value: "+1.28%" },
      { label: "퍼포먼스 % 1Y", value: "+2.94%" },
      { label: "퍼포먼스 % 5Y", value: "+77.75%" },
      { label: "퍼포먼스 % 10Y", value: "+185.00%" },
      { label: "퍼포먼스 % ALL", value: "+1395.26%" },
      { label: "변동성 1주", value: "2.17%" },
      { label: "변동성 1달", value: "2.08%" },
    ],
  },
  {
    name: "시간외",
    data: [
      { label: "프리-마켓 클로즈", value: "-" },
      { label: "프리-마켓 체인지 %", value: "-" },
      { label: "프리-마켓 갭 %", value: "-" },
      { label: "프리-마켓 볼륨", value: "-" },
      { label: "갭 %", value: "+2.48%" },
      { label: "거래량", value: "+185.00%" },
      { label: "볼륨 변화 %", value: "+75.43%" },
      { label: "포스트-마켓 클로즈", value: "-" },
      { label: "포스트-마켓 체인지 %", value: "-" },
      { label: "포스트-마켓 볼륨", value: "-" },
    ],
  },
  {
    name: "평가",
    data: [
      { label: "시가총액 실적 % 1Y", value: "6.86%" },
      { label: "PEG 순마진", value: "21.76" },
      { label: "P/S", value: "-" },
      { label: "P/B", value: "1.57" },
      { label: "P/CF", value: "1.18" },
      { label: "P/FCF", value: "-" },
      { label: "프라이스 / 캐쉬", value: "6.92" },
      { label: "기업가치", value: "435.173 T" },
      { label: "EV / 수익 순마진", value: "1.63" },
      { label: "EV / 에비타 순마진", value: "34.75" },
      { label: "EV / EBITDA 순마진", value: "8.44" },
    ],
  },
  {
    name: "배당",
    data: [
      { label: "주당 배당금 FY", value: "1444.00 KRW" },
      { label: "주당 배당금 FQ", value: "361.00 KRW" },
      { label: "배당 수익 % 순마진", value: "1.89%" },
      { label: "배당 수익률 %", value: "1.89%" },
      { label: "배당 비율 % 순마진", value: "49.81%" },
      { label: "DPS 성장 연간 YoY", value: "0.00%" },
      { label: "연속 배당 지불", value: "8" },
      { label: "연속 배당 성장", value: "0" },
    ],
  },
  {
    name: "수익성",
    data: [
      { label: "총마진", value: "31.63%" },
      { label: "영업마진", value: "4.69%" },
      { label: "세전 마진", value: "5.99%" },
      { label: "넷 마진", value: "7.37%" },
      { label: "FCF 마진", value: "-3.02%" },
      { label: "ROA", value: "4.26%" },
      { label: "ROE", value: "5.53%" },
      { label: "투하자본수익률", value: "5.46%" },
      { label: "R&D 비율", value: "11.08%" },
      { label: "판관비율", value: "15.86%" },
    ],
  },
  {
    name: "손익 계산",
    data: [
      { label: "수입", value: "267.106" },
      { label: "매출 성장률", value: "-7.32%" },
      { label: "총수익", value: "84.484" },
      { label: "영업 수입", value: "12.523" },
      { label: "순이익", value: "19.693" },
      { label: "세전영업이익", value: "51.554" },
    ],
  },
  {
    name: "대차 대조표",
    data: [
      { label: "수입", value: "267.106" },
      { label: "매출 성장률", value: "-7.32%" },
      { label: "총수익", value: "84.484" },
      { label: "영업 수입", value: "12.523" },
      { label: "순이익", value: "19.693" },
      { label: "세전영업이익", value: "51.554" },
    ],
  },
]);
</script>
<template>
  <div class="h-full flex flex-col bg-white divide-y">
    <div class="flex flex-col px-4" v-for="itmes in indicator">
      <div class="w-32 h-full px-4 flex font-bold text-lg">
        {{ itmes.name }}
      </div>
      <div class="text-sm text-neutral-400">
        {{ itmes.discrption }}
      </div>
      <Separator />
      <div class="flex items-center">
        <div v-for="item in itmes.data" class="h-full px-2 flex items-center hover:bg-neutral-100 cursor-pointer">
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
