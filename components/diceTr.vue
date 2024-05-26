<script setup lang="ts">
const props = defineProps<{
  선택된주사위: number;
}>();
const emit = defineEmits(["click"]);
</script>
<template>
  <div class="flex gap-1">
    <dice
      :주사위="1"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
    <dice
      :주사위="2"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
    <dice
      :주사위="3"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
    <dice
      :주사위="4"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
    <dice
      :주사위="5"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
    <dice
      :주사위="6"
      :선택된주사위="선택된주사위"
      @click="(arg: number) => emit('click', arg)"
    />
  </div>
</template>
