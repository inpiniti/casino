<script setup lang="ts">
const props = defineProps<{
  numbers: number[];
  colors: string[];
}>();
</script>
<template>
  <div>
    <RouletteBall :number="numbers[2]" :color="colors[2]" />
    <RouletteBall :number="numbers[1]" :color="colors[1]" />
    <RouletteBall :number="numbers[0]" :color="colors[0]" />
  </div>
</template>
