<script setup lang="ts">
interface Indices {
  [key: string]: any[];
}

const intervalId = ref();
onMounted(() => {
  getIndices();
  intervalId.value = setInterval(getIndices, 1001 * 60 * 10);
});

const getIndices = () => {
  fetch(`/api/investing/indices`)
    .then((res) => res.json())
    .then((data) => {
      indices.value = data;
      selectCountry();
    });
};

// 검색어에 대한 필터
const search = ref<string>("");
const indices = ref<Indices>({});
const cIndices = computed(() => {
  const filteredIndices: Indices = {};
  if (
    indices.value !== undefined &&
    indices.value !== null &&
    typeof indices.value === "object"
  ) {
    Object.keys(indices.value).forEach((country) => {
      const matches = indices.value[country].filter((index) =>
        country.toLowerCase().includes(search.value.toLowerCase())
      );
      if (matches.length > 0) {
        filteredIndices[country] = matches;
      }
    });
  }
  return filteredIndices;
});

// 선택된 국가
const selectedCountry = useState<any>("selectedCountry");
const nameTo = ({ name, indiceList }: { name: string; indiceList: any }) => {
  const nameList: any = {
    Israel: "il", // 이스라엘
    Brazil: "br", // 브라질
    France: "fr", // 프랑스
    Hong: "hk", // 홍콩
    Belgium: "be", // 벨기에
    Finland: "fi", // 핀란드
    Italy: "it", // 이탈리아
    Sweden: "se", // 스웨덴
    Singapore: "sg", // 싱가포르
    Netherlands: "nl", // 네덜란드
    Switzerland: "ch", // 스위스
    Chile: "cl", // 칠레
    Canada: "ca", // 캐나다
    Germany: "de", // 독일
    Ireland: "ie", // 아일랜드
    Norway: "no", // 노르웨이
    Denmark: "dk", // 덴마크
    Portugal: "pt", // 포르투갈
    Spain: "es", // 스페인
    United: "uk", // 영국, 아랍에미라이트도 섞여 있음 ㅠㅠ
    Colombia: "co", // 콜롬비아
    Czech: "cz", // 체코
    Greece: "gr", // 그리스
    Egypt: "eg", // 이집트
    Hungary: "hu", // 헝가리
    India: "in", // 인도
    Indonesia: "id", // 인도네시아
    Korea: "kr", // 한국
    Malaysia: "my", // 말레이시아
    Mexico: "mx", // 멕시코
    Peru: "pe", // 페루
    Philippines: "ph", // 필리핀
    Poland: "pl", // 폴란드
    Thailand: "th", // 태국
    Turkey: "tr", // 터키
    Argentina: "ar", // 아르헨티나
    Jordan: "jo", // 요르단
    Morocco: "ma", // 모로코
    Oman: "om", // 오만
    Pakistan: "pk", // 파키스탄
    Qatar: "qa", // 카타르
    Sri: "lk", // 스리랑카
    Australia: "au", // 호주
    China: "cn", // 중국
    Japan: "jp", // 일본
    US: "us", // 미국
    Austria: "at", // 오스트리아
    Cyprus: "cy", // 키프로스
    Taiwan: "tw", // 대만
  };
  selectedCountry.value = { name, indiceList };
  navigateTo(`/stock/${nameList[name]}`);
};

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
  <div class="grow-[0] h-full flex divide-x overflow-hidden bg-neutral-50">
    <div class="shrink-0 w-60 h-full overflow-y-scroll scrollbar-hide">
      <div>
        <input
          class="px-4 py-2 w-full focus:outline-none border-b"
          type="text"
          placeholder="search"
          v-model="search"
        />
      </div>
      <div
        v-if="indices"
        v-for="[name, indiceList] in Object.entries(cIndices)"
        class="px-4 py-2 border-b border-l-4 hover:bg-blue-50 hover:border-l-blue-500 cursor-pointer"
        :class="{ 'bg-blue-50  border-l-blue-500': selectedCountry === name }"
        @click="
          nameTo({
            name,
            indiceList,
          })
        "
      >
        {{ name == "Hong" ? "Hong Kong" : name }}
        <div class="flex text-xs" v-for="indice in indiceList">
          <div class="w-72">{{ indice.index }}</div>
          <div
            :class="
              indice.changePercent.startsWith('+')
                ? 'text-red-500'
                : 'text-blue-500'
            "
          >
            {{ indice.changePercent }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col grow-[0] overflow-hidden h-full w-full bg-neutral-100"
    >
      <div
        v-if="selectedCountry"
        class="shrink-0 flex flex-col divide-y border-b"
      >
        <div class="px-4 py-2 font-bold">{{ selectedCountry.name }}</div>
        <div class="flex divide-x">
          <div
            class="text-xs px-4 py-2 flex flex-col gap-2 items-center"
            v-for="indice in selectedCountry.indiceList"
          >
            <div class="font-bold pr-2">
              {{ indice.index }}
            </div>
            <div class="flex gap-2">
              <div>
                <div class="text-neutral-400">현재가</div>
                {{ indice.currentPrice }}
              </div>
              <div>
                <div class="text-neutral-400">고가</div>
                {{ indice.highPrice }}
              </div>
              <div>
                <div class="text-neutral-400">저가</div>
                {{ indice.lowPrice }}
              </div>
              <div>
                <div class="text-neutral-400">변동</div>
                <div
                  :class="
                    indice.change.startsWith('+')
                      ? 'text-red-500'
                      : 'text-blue-500'
                  "
                >
                  {{ indice.change }}
                </div>
              </div>
              <div>
                <div class="text-neutral-400">변동%</div>
                <div
                  :class="
                    indice.change.startsWith('+')
                      ? 'text-red-500'
                      : 'text-blue-500'
                  "
                >
                  {{ indice.changePercent }}
                </div>
              </div>
              <div>
                <div class="text-neutral-400">시간</div>
                {{ indice.time }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grow-[0] overflow-hidden h-full">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
