<script setup lang="ts">
import { onMounted, ref } from "vue";

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

const stockList = ref([<Stock>{}]);

onMounted(async () => {
  stockList.value = await fetch("/api/investing/en/all")
    .then((response) => response.json())
    .then((data) => data.data);
});
</script>
<template>
  <div class="flex w-full divide-x">
    <div class="flex flex-col divide-y">
      <div class="shrink-0 w-40 flex flex-col px-4 py-2 text-sm" v-for="item in stockList">
        <div class="font-bold">{{ item.Name }}</div>
        <div>Last Price: {{ item.Last }}</div>
        <div>Change: {{ item.Chg }}</div>
        <div>Change %: {{ item.ChgPct }}</div>
      </div>
    </div>
    <div class="grow-[0] w-full"><slot /></div>
  </div>
</template>
