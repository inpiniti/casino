<script setup lang="ts">
const props = defineProps<{
  기록들: number[][];
}>();
const sum = (기록: number[]) => 기록[0] + 기록[1] + 기록[2];
</script>
<template>
  <Card
    class="w-fit flex gap-1 px-2 py-1 bg-black bg-opacity-50 text-white border-0"
  >
    <div
      class="flex flex-col items-center justify-center text-xs w-4"
      v-for="기록 in 기록들.slice(-25).reverse()"
    >
      <div
        class="text-base"
        :class="sum(기록) < 11 ? 'text-blue-300' : 'text-red-300'"
      >
        {{ sum(기록) }}
      </div>
      <div>{{ 기록[0] }}</div>
      <div>{{ 기록[1] }}</div>
      <div>{{ 기록[2] }}</div>
    </div>
  </Card>
</template>
