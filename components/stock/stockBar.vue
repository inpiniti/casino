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

const windowLayout = useWindowLayout();
</script>
<template>
  <div class="flex justify-between w-full">
    <div class="flex gap-4 shrink-0">
      <div
        class="flex items-center px-3 cursor-pointer"
        @click="
          windowLayout.layout = windowLayout.layout == 'all' ? 'full' : 'all'
        "
      >
        <font-awesome-icon icon="bars" v-if="windowLayout.layout == 'full'" />
        <font-awesome-icon icon="x" v-else />
      </div>
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
    <div class="flex items-center gap-2">
      <ButtonLoading />
      <Input v-model="condition.search" placeholder="삼성전자" />
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
      <Button
        class="flex gap-2"
        :variant="windowLayout.interest ? 'default' : 'outline'"
        @click="windowLayout.interest = !windowLayout.interest"
      >
        <font-awesome-icon icon="heart" /> 관심종목
      </Button>
    </div>
  </div>
</template>
