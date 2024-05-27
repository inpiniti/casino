<script setup lang="ts">
const 나온구술배열 = ref<number[]>([]);
const 카운트배열 = ref<number[]>(Array(38).fill(0));

let 시뮬레이션ID: NodeJS.Timeout | null = null;
let 시뮬레이션속도: number = 100; // 기본값은 1초

const ballClickHandler = (number: number) => {
  나온구술배열.value.push(number);
  카운트배열.value = 카운트배열.value.map((count) => count + 1);
  카운트배열.value[number - 1] = 0;
};

const BLACK_COLOR = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];

const 자동입력 = () => {
  // 1~ 38까지의 숫자 중 랜덤으로 하나를 뽑아서 ballClickHandler() 실행
  if (시뮬레이션ID) {
    clearInterval(시뮬레이션ID);
    시뮬레이션ID = null;
  } else {
    시뮬레이션ID = setInterval(() => {
      ballClickHandler(Math.floor(Math.random() * 38) + 1);
    }, 시뮬레이션속도);
  }
};
</script>
<template>
  <div class="bg-red-700 flex flex-col items-center justify-center p-4 gap-2">
    <div class="flex gap-2 items-end">
      <Button @click="자동입력()">자동입력</Button>
      <Card
        class="w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0"
        >{{ 나온구술배열.length }}
      </Card>
      <div class="text-xs flex flex-col bg-black bg-opacity-50 w-fit h-fit">
        <div class="text-white p-1 flex justify-center">최근 당첨 번호</div>
        <div class="flex gap-1 p-1">
          <div v-for="ball in 나온구술배열.slice(-25).reverse()">
            <div
              class="bg-black rounded-full text-white w-5 h-5 flex items-center justify-center"
              :class="
                BLACK_COLOR.includes(ball)
                  ? 'bg-black'
                  : ball == 37
                  ? 'bg-green-700'
                  : ball == 38
                  ? 'bg-green-700'
                  : 'bg-red-600'
              "
            >
              {{ ball == 37 ? "00" : ball == 38 ? "0" : ball }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <RouletteBallTable
      @click="ballClickHandler"
      :카운트배열="카운트배열"
      class="border border-white border-opacity-50"
    />
  </div>
</template>
