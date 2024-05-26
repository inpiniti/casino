<script setup lang="ts">
const props = defineProps<{
  count: number;
  감도: number;
}>();

const color = computed(() => {
  switch (Math.floor(props.count / 15) - props.감도) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-orange-500";
    case 3:
      return "bg-amber-500";
    case 4:
      return "bg-yellow-500";
    case 5:
      return "bg-lime-500";
    case 6:
      return "bg-green-500";
    case 7:
      return "bg-emerald-500";
    case 8:
      return "bg-teal-500";
    case 9:
      return "bg-cyan-500";
    case 10:
      return "bg-sky-500";
    case 11:
      return "bg-blue-500";
    case 12:
      return "bg-indigo-500";
    case 13:
      return "bg-violet-500";
    case 14:
      return "bg-purple-500";
    case 15:
      return "bg-fuchsia-500";
    case 16:
      return "bg-pink-500";
    case 17:
      return "bg-pink-500";
    case 18:
      return "bg-rose-500";
    default:
      return "bg-emerald-700";
  }
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / 15) - props.감도);
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
