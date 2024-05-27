<script setup lang="ts">
const 랜덤구술 = ref<number>(0);
const 나온구술배열 = ref<number[]>([]);
const 카운트배열 = ref<number[]>(Array(38).fill(0));

let 시뮬레이션ID: NodeJS.Timeout | null = null;
let 시뮬레이션속도: number = 1000; // 기본값은 1초
</script>
<template>
  <div>
    <div>배팅 규칙</div>
    <div>0(36/1) = 1</div>
    <RouletteBallTable />
  </div>
</template>
