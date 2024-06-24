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
  <div class="px-2 py-1.5 flex flex-col gap-1.5">
    <div class="text-neutral-400 flex items-center gap-2 text-sm">
      <Input type="text" v-model="condition.search" placeholder="search" @input="changeCondition" />
      <Switch id="airplane-mode" @click="condition.viewRecentData = !condition.viewRecentData" @change="changeCondition" />최근
      <Switch id="airplane-mode" @click="condition.goodTechnical = !condition.goodTechnical" @change="changeCondition" />분석
    </div>
    <div class="text-neutral-400 flex items-center gap-2">
      <Select v-model="condition.sorting" @change="changeCondition">
        <SelectTrigger class="outline-none focus:outline-none w-fit">
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
  </div>
</template>
