<script setup lang="ts">
const props = defineProps<{
  sum: number;
  description: number;
  count: number;
  감도: number;
}>();

const color = computed(() => {
  switch (Math.floor(props.count / (props.description / 2)) - props.감도) {
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
      return "bg-emerald-500";
  }
});

const 가이드 = computed(() => {
  return Math.max(
    0,
    Math.floor(props.count / (props.description / 2)) - props.감도
  );
});
</script>
<template>
  <Card
    class="w-14 px-3 py-2 flex flex-col border-0 justify-between items-center"
    :class="[color]"
  >
    <div class="text-emerald-100 text-3xl font-bold">{{ sum }}</div>
    <div class="text-xs text-white">{{ 가이드 }}</div>
    <div class="text-emerald-100 text-sm text-nowrap">
      1 : {{ description }}
    </div>
  </Card>
</template>
