<script setup lang="ts">
const props = defineProps<{
  주사위들: number[];
  triples: number[];
  감도: number;
}>();
</script>
<template>
  <Card class="w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0">
    <div class="flex justify-center text-white">1:150</div>
    <div class="flex flex-col gap-1">
      <TripleDice :주사위="주사위들[0]" :count="triples[0]" :감도="감도" />
      <TripleDice :주사위="주사위들[1]" :count="triples[1]" :감도="감도" />
      <TripleDice :주사위="주사위들[2]" :count="triples[2]" :감도="감도" />
    </div>
  </Card>
</template>
