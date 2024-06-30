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
    </div>
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
</template>
