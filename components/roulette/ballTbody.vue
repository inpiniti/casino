<script setup lang="ts">
const props = defineProps<{
  numbers: number[][];
  colors: string[][];
}>();
</script>
<template>
  <div class="flex">
    <RouletteBallTr :numbers="numbers[0]" :colors="colors[0]" />
    <RouletteBallTr :numbers="numbers[1]" :colors="colors[1]" />
    <RouletteBallTr :numbers="numbers[2]" :colors="colors[2]" />
    <RouletteBallTr :numbers="numbers[3]" :colors="colors[3]" />
  </div>
</template>
