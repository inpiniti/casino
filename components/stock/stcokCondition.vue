<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
}>();

const condition = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

const changeCondition = () => {
  emit("update:modelValue", condition.value);
};

watch(condition, changeCondition, { deep: true });
</script>
<template>
  <div class="flex flex-col gap-3">
    <div>
      <div class="font-bold">Dimensions</div>
      <div class="text-sm text-neutral-500">
        Set the dimensions for the layer.
      </div>
    </div>
    <div class="grid items-center grid-cols-3 gap-2">
      <div class="text-sm font-bold">검색</div>
      <div class="col-span-2">
        <Input
          type="text"
          v-model="condition.search"
          placeholder="search"
          @input="changeCondition"
        />
      </div>
      <div class="text-sm font-bold">최근 1시간</div>
      <div class="col-span-2">
        <Switch
          id="airplane-mode"
          :checked="condition.viewRecentData"
          @click="condition.viewRecentData = !condition.viewRecentData"
          @change="changeCondition"
        />
      </div>
      <div class="text-sm font-bold">적극 매수만</div>
      <div class="col-span-2">
        <Switch
          id="airplane-mode"
          :checked="condition.goodTechnical"
          @click="condition.goodTechnical = !condition.goodTechnical"
          @change="changeCondition"
        />
      </div>
      <div class="text-sm font-bold">정렬</div>
      <div class="col-span-2">
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
  </div>
</template>
