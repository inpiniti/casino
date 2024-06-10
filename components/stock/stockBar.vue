<script setup lang="ts">
const appConfig = useAppConfig();
const nameList: any = appConfig.nameList;

const props = defineProps<{
  selectedCountry: any;
}>();
</script>
<template>
  <div class="px-4 py-2 font-bold flex gap-2 items-center">
    <img class="h-fit border border-neutral-400" :src="`https://s3-symbol-logo.tradingview.com/country/${nameList[selectedCountry.name].toUpperCase()}.svg`" />
    {{ selectedCountry.name }}
  </div>
  <div class="flex divide-x">
    <div class="text-xs px-4 py-2 flex gap-2 items-center" v-for="indice in selectedCountry.indiceList">
      <div class="font-bold pr-2">
        {{ indice.index }}
      </div>
      <div class="flex gap-2">
        <div class="flex gap-1">
          <div class="text-neutral-400">변동</div>
          <div :class="indice.change.startsWith('+') ? 'text-red-500' : 'text-blue-500'">
            {{ indice.change }}
          </div>
        </div>
        <div class="flex gap-1">
          <div class="text-neutral-400">변동%</div>
          <div :class="indice.change.startsWith('+') ? 'text-red-500' : 'text-blue-500'">
            {{ indice.changePercent }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
