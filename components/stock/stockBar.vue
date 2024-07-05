<script setup lang="ts">
const appConfig = useAppConfig();
const nameList: any = appConfig.nameList;

const props = defineProps<{
  selectedCountry: any;
  modelValue: any;
}>();

const condition = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

const changeCondition = () => {
  emit("update:modelValue", condition.value);
};

const exchange = useExchange();
</script>
<template>
  <div class="flex justify-between w-full">
    <div class="flex gap-4 shrink-0">
      <div class="flex items-center gap-2 font-bold">
        <img
          class="border h-fit border-neutral-400"
          :src="`https://s3-symbol-logo.tradingview.com/country/${nameList[
            selectedCountry.name
          ].toUpperCase()}.svg`"
        />
        {{ selectedCountry.name }}
      </div>
      <div class="flex items-center gap-5">
        <div
          class="flex flex-col text-xs"
          v-for="indice in selectedCountry.indiceList"
        >
          <div class="text-neutral-400">
            {{ indice.index.replace(selectedCountry.name, "") }}
          </div>
          <div class="flex gap-1">
            <div
              :class="
                indice.change.startsWith('+') ? 'text-red-500' : 'text-blue-500'
              "
            >
              {{ indice.changePercent }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center gap-2 px-4 shrink-0 h-14"
        v-if="selectedCountry"
      >
        <Select v-model="exchange" v-if="selectedCountry?.name == 'Korea'">
          <SelectTrigger>
            <SelectValue placeholder="거래소" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>거래소</SelectLabel>
              <SelectItem value="60"> 코스피 </SelectItem>
              <SelectItem value="130"> 코넥스 </SelectItem>
              <SelectItem value="110"> 코스닥 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select v-model="exchange" v-else-if="selectedCountry?.name == 'US'">
          <SelectTrigger>
            <SelectValue placeholder="거래소" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>거래소</SelectLabel>
              <SelectItem value="95"> OTC Markets </SelectItem>
              <SelectItem value="2"> 나스닥 </SelectItem>
              <SelectItem value="1"> 뉴욕 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <ButtonLoading />
      <Popover>
        <PopoverTrigger class="grow-[0]">
          <Button variant="outline">
            <font-awesome-icon icon="filter" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <StockStcokCondition
            v-model="condition"
            @update:modelValue="changeCondition"
          />
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
