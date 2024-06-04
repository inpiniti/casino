<script setup lang="ts">
const props = defineProps<{
  number: number;
  color: string;
  count: number;
  감도: number;
}>();
const emit = defineEmits(["click"]);
const onClick = () => {
  emit("click", props.number);
};

const bgcolor = computed(() => {
  const num = Math.floor(props.count / 18) - props.감도;
  if (num <= 0) {
    return "bg-red-700 hover:bg-red-800 opacity-50";
  }
  return getColorClass(num);
});

const 가이드 = computed(() => {
  return Math.floor(props.count / 18) - props.감도;
});
</script>
<template>
  <div class="relative p-2 cursor-pointer" :class="bgcolor" @click="onClick">
    <div class="absolute text-xs text-white top-0 left-1">{{ 가이드 }}</div>
    <div
      class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"
      :class="color == 'red' ? 'bg-red-600' : 'bg-black'"
    >
      {{ number }}
    </div>
  </div>
</template>
