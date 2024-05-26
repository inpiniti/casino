<script setup lang="ts">
const props = defineProps<{
  주사위들: number[];
  doubles: number[];
  감도: number;
}>();
</script>
<template>
  <Card class="w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0">
    <div class="flex justify-center text-white">1:8</div>
    <div class="flex gap-1">
      <DoubleDice :주사위="주사위들[0]" :count="doubles[0]" :감도="감도" />
      <DoubleDice :주사위="주사위들[1]" :count="doubles[1]" :감도="감도" />
      <DoubleDice :주사위="주사위들[2]" :count="doubles[2]" :감도="감도" />
    </div>
  </Card>
</template>
