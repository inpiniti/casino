<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  주사위: number;
  count: number;
  감도: number;
}>();

const color = computed(() => {
  const num = Math.floor(props.count / 8) - props.감도;
  if (num <= 0) {
    return "bg-emerald-700";
  }
  return getColorClass(num);
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / 8) - props.감도);
});
</script>
<template>
  <Card
    class="w-fit px-1 py-1 flex flex-col border-0 h-32 justify-between items-center text-white text-xs"
    :class="[color]"
  >
    <Card
      class="w-10 h-10 flex items-center justify-center border-0 bg-emerald-100"
      >{{ 주사위 }}</Card
    >
    <div>
      {{ 가이드 }}
    </div>
    <Card
      class="w-10 h-10 flex items-center justify-center border-0 bg-emerald-100"
      >{{ 주사위 }}</Card
    >
  </Card>
</template>
