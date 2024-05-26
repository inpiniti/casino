<script setup lang="ts">
const props = defineProps<{
  선택된주사위: number;
  주사위: number;
}>();
const emit = defineEmits(["click"]);
</script>
<template>
  <Card
    class="w-5 h-5 flex justify-center items-center border-0 bg-white cursor-pointer"
    :class="{ 'bg-opacity-50': 선택된주사위 != 주사위 }"
    @click="emit('click', 주사위)"
    >{{ 주사위 }}</Card
  >
</template>
