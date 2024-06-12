<script setup lang="ts">
const props = defineProps<{
  technicalText: string;
}>();
</script>
<template>
  <span
    :class="{
      'text-neutral-700':
        technicalText === 'strong_buy' || technicalText === 'buy',
      'text-neutral-500': technicalText === 'neutral',
      'text-neutral-300':
        technicalText === 'sell' || technicalText === 'strong_sell',
    }"
  >
    {{
      technicalText == "strong_sell"
        ? "적극 매도"
        : technicalText == "sell"
        ? "매도"
        : technicalText == "neutral"
        ? "중립"
        : technicalText == "buy"
        ? "매수"
        : "적극 매수"
    }}
  </span>
</template>
