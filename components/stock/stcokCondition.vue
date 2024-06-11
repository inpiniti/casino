<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
}>();

const condition = ref({
  search: props.modelValue.search,
  viewRecentData: props.modelValue.viewRecentData,
  goodTechnical: props.modelValue.goodTechnical,
  sorting: props.modelValue.sorting,
});

const emit = defineEmits(["update:modelValue"]);

const changeCondition = () => {
  console.log("changeCondition");
  emit("update:modelValue", condition.value);
};

watch(condition, changeCondition, { deep: true });
</script>
<template>
  <div class="px-4 py-2">
    <input class="focus:outline-none" type="text" :value="condition.search" placeholder="search" @input="changeCondition" />
  </div>
  <div class="px-4 py-2 text-neutral-400 flex items-center gap-2 text-sm">
    <Switch id="airplane-mode" @click="condition.viewRecentData = !condition.viewRecentData" @change="changeCondition" />최근 데이터
  </div>
  <div class="px-4 py-2 text-neutral-400 flex items-center gap-2 text-sm"><Switch id="airplane-mode" @click="condition.goodTechnical = !condition.goodTechnical" @change="changeCondition" />분석</div>
  <div class="text-neutral-400 flex items-center gap-2">
    <Select v-model="condition.sorting" @change="changeCondition">
      <SelectTrigger class="border-0 outline-none focus:outline-none">
        <SelectValue placeholder="정렬" />
      </SelectTrigger>
      <SelectContent class="">
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="volumeRate"> 거래량율 </SelectItem>
          <SelectItem value="ChgPct"> 변동률 </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
