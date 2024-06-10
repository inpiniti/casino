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
</script>
<template>
  <div class="h-full flex flex-col bg-white">
    <div class="px-4 py-2 flex gap-2">
      <div>LG 전자</div>
      <div>100,700</div>
      <div>0.00%</div>
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
