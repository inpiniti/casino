<script setup lang="ts">
const intervalId = ref();
onMounted(() => {
  getIndices();
  intervalId.value = setInterval(getIndices, 1001 * 60 * 10);
});

interface Indices {
  [key: string]: any[];
}
const indices = ref<Indices>({});

const getIndices = () => {
  fetch(`/api/investing/indices`)
    .then((res) => res.json())
    .then((data) => {
      indices.value = data;
      selectCountry();
    });
};

const selectedCountry = useState<any>("selectedCountry");

const selectCountry = () => {
  if (selectedCountry.value != undefined) {
    selectedCountry.value = {
      name: selectedCountry.value.name,
      indiceList: indices.value[selectedCountry.value.name],
    };
  } else {
    selectedCountry.value = {
      name: "Korea",
      indiceList: indices.value["Korea"],
    };
  }
};
</script>
<template>
  <div class="grow-[0] h-full flex divide-x overflow-hidden">
    <div class="flex flex-col shrink-0 w-36 h-full divide-y">
      <StockMenu :indices="indices" />
    </div>
    <div class="grow-[0] overflow-hidden h-full w-full">
      <NuxtPage />
    </div>
  </div>
</template>
