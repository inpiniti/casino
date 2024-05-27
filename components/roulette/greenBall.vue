<script setup lang="ts">
const props = defineProps<{
  number: string;
  count: number;
}>();

const bgcolor = computed(() => {
  switch (Math.floor(props.count / 18) - 2) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-orange-500";
    case 3:
      return "bg-amber-500";
    case 4:
      return "bg-yellow-500";
    case 5:
      return "bg-lime-500";
    case 6:
      return "bg-green-500";
    case 7:
      return "bg-emerald-500";
    case 8:
      return "bg-teal-500";
    case 9:
      return "bg-cyan-500";
    case 10:
      return "bg-sky-500";
    case 11:
      return "bg-blue-500";
    case 12:
      return "bg-indigo-500";
    case 13:
      return "bg-violet-500";
    case 14:
      return "bg-purple-500";
    case 15:
      return "bg-fuchsia-500";
    case 16:
      return "bg-pink-500";
    case 17:
      return "bg-pink-500";
    case 18:
      return "bg-rose-500";
    default:
      return "bg-green-700";
  }
});

const 가이드 = computed(() => {
  return Math.max(0, Math.floor(props.count / 18) - 2);
});
</script>
<template>
  <div
    class="relative hover:bg-green-600 flex-1 h-full p-1 text-white flex items-center justify-center cursor-pointer"
    :class="bgcolor"
  >
    <div class="absolute text-xs text-white top-0 left-1">{{ 가이드 }}</div>
    {{ props.number }}
  </div>
</template>
