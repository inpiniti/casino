<script setup lang="ts">
const props = defineProps<{
  number: number;
  color: string;
}>();
</script>
<template>
  <div class="p-1">
    <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center" :class="color == 'red' ? 'bg-red-600' : 'bg-black'">{{ number }}</div>
  </div>
</template>
