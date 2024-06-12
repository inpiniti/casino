<script setup lang="ts">
const appConfig = useAppConfig();
const nameList: any = appConfig.nameList;

const props = defineProps<{
  selectedCountry: any;
}>();
</script>
<template>
  <div class="font-bold flex gap-2 items-center">
    <img
      class="h-fit border border-neutral-400"
      :src="`https://s3-symbol-logo.tradingview.com/country/${nameList[
        selectedCountry.name
      ].toUpperCase()}.svg`"
    />
    {{ selectedCountry.name }}
  </div>
  <div class="flex gap-5 items-center">
    <div
      class="text-xs flex flex-col"
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
</template>
