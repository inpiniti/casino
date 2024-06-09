<script setup lang="ts">
const props = defineProps<{
  주사위: number;
  count: number;
  감도: number;
}>();

const color = computed(() => {
  const num = Math.floor(props.count / 150) - props.감도;
  if (num <= 0) {
    return "bg-emerald-700";
  }
  return getColorClass(num);
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / 150) - props.감도);
});
</script>
<template>
  <Card class="w-fit px-3 py-1 flex gap-3 border-0" :class="[color]">
    <div>{{ 가이드 }}</div>
    <Card
      class="w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"
    >
      {{ 주사위 }}
    </Card>
    <Card
      class="w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"
    >
      {{ 주사위 }}
    </Card>
    <Card
      class="w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"
    >
      {{ 주사위 }}
    </Card>
  </Card>
</template>
