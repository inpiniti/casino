<script setup lang="ts">
const props = defineProps<{
  sum: number;
  description: number;
  count: number;
  감도: number;
}>();

const color = computed(() => {
  const num = Math.floor(props.count / props.description) - props.감도;
  if (num <= 0) {
    return "bg-emerald-500";
  }
  return getColorClass(num);
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / props.description) - props.감도);
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
