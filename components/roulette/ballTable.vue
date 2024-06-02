<script setup lang="ts">
const emit = defineEmits(["click"]);
const ballClickHandler = (number: number) => {
  emit("click", number);
};
const props = defineProps<{
  카운트배열: number[];
  카운트배열2: number[];
  감도: number;
}>();
</script>
<template>
  <div class="divide-solid divide-red-100 divide-y divide-opacity-50">
    <div
      class="flex w-fit divide-solid divide-x divide-white divide-opacity-50"
    >
      <RouletteGreenBallTr>
        <RouletteGreenBall
          number="00"
          :count="카운트배열[36]"
          :감도="감도"
          @click="ballClickHandler(37)"
        />
        <RouletteGreenBall
          number="0"
          :count="카운트배열[37]"
          :감도="감도"
          @click="ballClickHandler(38)"
        />
      </RouletteGreenBallTr>
      <RouletteBallTbody>
        <RouletteBallTr>
          <RouletteBall
            :number="3"
            :count="카운트배열[2]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="2"
            :count="카운트배열[1]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="1"
            :count="카운트배열[0]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="6"
            :count="카운트배열[5]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="5"
            :count="카운트배열[4]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="4"
            :count="카운트배열[3]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="9"
            :count="카운트배열[8]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="8"
            :count="카운트배열[7]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="7"
            :count="카운트배열[6]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="12"
            :count="카운트배열[11]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="11"
            :count="카운트배열[10]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="10"
            :count="카운트배열[9]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
      </RouletteBallTbody>
      <RouletteBallTbody>
        <RouletteBallTr>
          <RouletteBall
            :number="15"
            :count="카운트배열[14]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="14"
            :count="카운트배열[13]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="13"
            :count="카운트배열[12]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="18"
            :count="카운트배열[17]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="17"
            :count="카운트배열[16]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="16"
            :count="카운트배열[15]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="21"
            :count="카운트배열[20]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="20"
            :count="카운트배열[19]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="19"
            :count="카운트배열[18]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="24"
            :count="카운트배열[23]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="23"
            :count="카운트배열[22]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="22"
            :count="카운트배열[21]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
      </RouletteBallTbody>
      <RouletteBallTbody>
        <RouletteBallTr>
          <RouletteBall
            :number="27"
            :count="카운트배열[26]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="26"
            :count="카운트배열[25]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="25"
            :count="카운트배열[24]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="30"
            :count="카운트배열[29]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="29"
            :count="카운트배열[28]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="28"
            :count="카운트배열[27]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="33"
            :count="카운트배열[32]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="32"
            :count="카운트배열[31]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="31"
            :count="카운트배열[30]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <RouletteBallTr>
          <RouletteBall
            :number="36"
            :count="카운트배열[35]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="35"
            :count="카운트배열[34]"
            :감도="감도"
            color="black"
            @click="ballClickHandler"
          />
          <RouletteBall
            :number="34"
            :count="카운트배열[33]"
            :감도="감도"
            color="red"
            @click="ballClickHandler"
          />
        </RouletteBallTr>
        <div
          class="shrink-0 w-8 divide-y divide-red-100 divide-opacity-50 flex flex-col"
        >
          <div class="grow-[0] h-full relative">
            <div class="absolute text-xs text-white top-0 left-1">
              {{ 카운트배열2[0] }}
            </div>
          </div>
          <div class="grow-[0] h-full relative">
            <div class="absolute text-xs text-white top-0 left-1">
              {{ 카운트배열2[1] }}
            </div>
          </div>
          <div class="grow-[0] h-full relative">
            <div class="absolute text-xs text-white top-0 left-1">
              {{ 카운트배열2[2] }}
            </div>
          </div>
        </div>
      </RouletteBallTbody>
    </div>
    <div class="flex divide-x divide-opacity-50 divide-red-50">
      <div class="shrink-0 w-7 p-2"></div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[3] }}
        </div>
        1~12
      </div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[4] }}
        </div>
        13~24
      </div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[5] }}
        </div>
        24~36
      </div>
      <div
        class="shrink-0 w-8 bg-green-700 text-white flex justify-center items-end"
      >
        00
      </div>
    </div>
    <div class="flex divide-x divide-opacity-50 divide-red-50">
      <div class="shrink-0 w-7"></div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[6] }}
        </div>
        1~18
      </div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[7] }}
        </div>
        짝수
      </div>
      <div
        class="grow-[0] w-full p-2 flex justify-center text-white bg-red-500 relative"
      >
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[8] }}
        </div>
        레드
      </div>
      <div
        class="grow-[0] w-full p-2 flex justify-center text-white bg-black relative"
      >
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[9] }}
        </div>
        블랙
      </div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[10] }}
        </div>
        홀수
      </div>
      <div class="grow-[0] w-full p-2 flex justify-center text-white relative">
        <div class="absolute text-xs text-white top-0 left-1">
          {{ 카운트배열2[11] }}
        </div>
        19~36
      </div>
      <div
        class="shrink-0 w-8 bg-green-700 text-white flex justify-center items-start"
      >
        0
      </div>
    </div>
  </div>
</template>
