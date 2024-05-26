<script setup lang="ts">
const props = defineProps<{
  선택된주사위들: number[];
}>();
const emit = defineEmits(["firstClick", "secondClick", "thirdClick"]);
</script>
<template>
  <Card
    class="w-fit h-fit flex flex-col gap-1 px-2 py-1 bg-black bg-opacity-10 border-0 text-xs"
  >
    <diceTr
      :선택된주사위="선택된주사위들[0]"
      @click="(arg: number) => emit('firstClick', arg)"
    ></diceTr>
    <diceTr
      :선택된주사위="선택된주사위들[1]"
      @click="(arg: number) => emit('secondClick', arg)"
    ></diceTr>
    <diceTr
      :선택된주사위="선택된주사위들[2]"
      @click="(arg: number) => emit('thirdClick', arg)"
    ></diceTr>
  </Card>
</template>
