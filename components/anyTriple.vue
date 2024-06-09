<script setup lang="ts">
const props = defineProps<{
  count: number;
  감도: number;
}>();

const color = computed(() => {
  const num = Math.floor(props.count / 30) - props.감도;
  if (num <= 0) {
    return "bg-emerald-700";
  }
  return getColorClass(num);
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / 30) - props.감도);
});
</script>
<template>
  <Card class="w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0">
    <div class="flex justify-center text-white">1:30 ({{ 가이드 }})</div>
    <div class="flex justify-center text-sm text-yellow-200">ANY TRIPLE</div>
    <div class="flex flex-col gap-1">
      <Card class="w-fit px-1 py-1 flex gap-3 border-0" :class="[color]">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >1</Card
            >
            <p class="text-white">X3</p>
          </div>
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >3</Card
            >
            <p class="text-white">X3</p>
          </div>
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >5</Card
            >
            <p class="text-white">X3</p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >2</Card
            >
            <p class="text-white">X3</p>
          </div>
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >4</Card
            >
            <p class="text-white">X3</p>
          </div>
          <div class="flex items-center gap-1">
            <Card
              class="w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"
              >5</Card
            >
            <p class="text-white">X3</p>
          </div>
        </div>
      </Card>
    </div>
  </Card>
</template>
