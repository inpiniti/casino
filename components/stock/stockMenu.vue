<script setup lang="ts">
const appConfig = useAppConfig();
const nameList: any = appConfig.nameList;
const codeList: any = appConfig.codeList;

interface Indices {
  [key: string]: any[];
}
const props = defineProps<{
  indices: Indices;
}>();

// 검색어에 대한 필터
const search = ref<string>("");
const cIndices = computed(() => {
  const filteredIndices: Indices = {};
  if (props.indices !== undefined && props.indices !== null && typeof props.indices === "object") {
    Object.keys(props.indices).forEach((country) => {
      const matches = props.indices[country].filter((index) => country.toLowerCase().includes(search.value.toLowerCase()));
      if (matches.length > 0) {
        filteredIndices[country] = matches;
      }
    });
  }
  return filteredIndices;
});

const selectedCountry = useState<any>("selectedCountry");

const nameTo = ({ name, indiceList }: { name: string; indiceList: any }) => {
  selectedCountry.value = { name, indiceList };
  navigateTo(`/stock/${nameList[name]}`);
};
</script>
<template>
  <div class="shrink-0 pt-2 px-2">
    <input class="px-4 py-2 w-full focus:outline-none border rounded" type="text" placeholder="search" v-model="search" />
  </div>
  <div class="grow-[0] h-full overflow-y-scroll scrollbar-hide">
    <div
      v-if="indices"
      v-for="[name, indiceList] in Object.entries(cIndices)"
      class="px-4 py-2 mx-2 my-1 rounded cursor-pointer text-xs flex gap-2 items-center"
      :class="[selectedCountry.name === name ? 'bg-black text-white hover:bg-neutral-800' : 'hover:bg-neutral-100', codeList[nameList[name]].countryId == undefined ? 'text-neutral-300' : '']"
      @click="
        nameTo({
          name,
          indiceList,
        })
      "
    >
      <img class="rounded-full border border-neutral-600" :src="`https://s3-symbol-logo.tradingview.com/country/${nameList[name].toUpperCase()}.svg`" />
      {{ name == "Hong" ? "Hong Kong" : name }}
      <!-- <div class="flex text-xs" v-for="indice in indiceList">
            <div class="w-72">{{ indice.index }}</div>
            <div :class="indice.changePercent.startsWith('+') ? 'text-red-500' : 'text-blue-500'">
              {{ indice.changePercent }}
            </div>
          </div> -->
    </div>
  </div>
</template>
