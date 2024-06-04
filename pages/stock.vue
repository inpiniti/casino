<script setup lang="ts">
import { onMounted, ref } from "vue";

type Stock = {
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
