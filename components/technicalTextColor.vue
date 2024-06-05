<script setup lang="ts">
const props = defineProps<{
  technicalText: string;
}>();
</script>
<template>
  <span
    :class="{
      'text-red-500': technicalText === 'strong_buy',
      'text-yellow-500': technicalText === 'buy',
      'text-gray-500': technicalText === 'neutral',
      'text-blue-500': technicalText === 'sell',
      'text-green-500': technicalText === 'strong_sell',
    }"
  >
    {{ technicalText }}
  </span>
</template>
