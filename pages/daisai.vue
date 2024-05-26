<script setup lang="ts">
import { computed, ref } from "vue";
import DiceHistory from "~/components/diceHistory.vue";
import DoubleDiceWarp from "~/components/doubleDiceWarp.vue";

const 감도 = ref(5);

const 기록들 = ref<number[][]>([]);

const 선택된주사위들 = ref<number[]>([0, 0, 0]);
const 주사위입력 = () => {
  기록들.value.push(선택된주사위들.value);

  anyTriple.value++;
  for (let i = 0; i < 6; i++) {
    triples[i].value++;
    if (선택된주사위들.value.filter((val) => val === i + 1).length === 3) {
      triples[i].value = 0;
      anyTriple.value = 0;
    }
  }

  for (let i = 0; i < 6; i++) {
    doubles[i].value++;
    if (선택된주사위들.value.filter((val) => val === i + 1).length === 2) {
      doubles[i].value = 0;
    }
  }

  for (let i = 0; i < 14; i++) {
    sumOfThreeDice[i].value++;
  }
  const sum = 선택된주사위들.value.reduce((a, b) => a + b, 0);
  if (3 < sum && sum < 18) {
    sumOfThreeDice[sum - 4].value = 0;
  }

  선택된주사위들.value = [0, 0, 0];
};
const 랜덤입력 = () => {
  선택된주사위들.value = Array(3)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
  기록들.value.push(선택된주사위들.value);

  anyTriple.value++;
  for (let i = 0; i < 6; i++) {
    triples[i].value++;
    if (선택된주사위들.value.filter((val) => val === i + 1).length === 3) {
      triples[i].value = 0;
      anyTriple.value = 0;
    }
  }

  for (let i = 0; i < 6; i++) {
    doubles[i].value++;
    if (선택된주사위들.value.filter((val) => val === i + 1).length === 2) {
      doubles[i].value = 0;
    }
  }

  for (let i = 0; i < 14; i++) {
    sumOfThreeDice[i].value++;
  }
  const sum = 선택된주사위들.value.reduce((a, b) => a + b, 0);
  if (3 < sum && sum < 18) {
    sumOfThreeDice[sum - 4].value = 0;
  }

  선택된주사위들.value = [0, 0, 0];
};

let interval: NodeJS.Timeout | null = null;
const 자동입력 = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  } else {
    let count = 0;
    interval = setInterval(() => {
      랜덤입력();
      count++;
    }, 100);
  }
};

const anyTriple = ref<number>(0);
const triples = Array(6)
  .fill(0)
  .map(() => ref<number>(0));
const doubles = Array(6)
  .fill(0)
  .map(() => ref<number>(0));
const sumOfThreeDice = Array(14)
  .fill(0)
  .map(() => ref<number>(0));

const isDiceInputDisabled = computed(() => 선택된주사위들.value.includes(0));
</script>
<template>
  <div class="p-4 bg-emerald-700 flex flex-col gap-1 items-center">
    <div class="flex gap-1 items-end">
      <DiceTable
        :선택된주사위들="선택된주사위들"
        @firstClick="(arg: number) => 선택된주사위들[0] = arg"
        @secondClick="(arg: number) => 선택된주사위들[1] = arg"
        @thirdClick="(arg: number) => 선택된주사위들[2] = arg"
      />
      <Button
        variant="outline"
        :disabled="isDiceInputDisabled"
        @click="주사위입력()"
        >선택완료</Button
      >
      <Button @click="랜덤입력()">랜덤입력</Button>
      <Button @click="자동입력()">자동입력</Button>
      <div class="flex items-center gap-1 text-white">
        <Button @click="감도++">+</Button>
        <div>
          {{ 감도 }}
        </div>
        <Button @click="감도--">-</Button>
      </div>
      <Card
        class="w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0"
        >{{ 기록들.length }}
      </Card>
      <DiceHistory v-if="기록들.length" :기록들="기록들" />
    </div>
    <div class="flex gap-1">
      <DoubleDiceWarp
        :주사위들="[1, 2, 3]"
        :doubles="[doubles[0].value, doubles[1].value, doubles[2].value]"
        :감도="감도"
      />
      <TripleDiceWarp
        :주사위들="[1, 2, 3]"
        :triples="[triples[0].value, triples[1].value, triples[2].value]"
        :감도="감도"
      />

      <AnyTriple :count="anyTriple" :감도="감도" />

      <TripleDiceWarp
        :주사위들="[4, 5, 6]"
        :triples="[triples[3].value, triples[4].value, triples[5].value]"
        :감도="감도"
      />
      <DoubleDiceWarp
        :주사위들="[4, 5, 6]"
        :doubles="[doubles[3].value, doubles[4].value, doubles[5].value]"
        :감도="감도"
      />
    </div>
    <SumDiceWrap :sumOfThreeDice="sumOfThreeDice" :감도="감도" />
  </div>
</template>
