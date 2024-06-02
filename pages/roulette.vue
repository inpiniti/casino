<script setup lang="ts">
const 나온횟수 = ref<number>(0);
const 나온구술배열 = ref<number[]>([]);
const 카운트배열 = ref<number[]>(Array(38).fill(0));
const 카운트배열2 = ref<number[]>(Array(12).fill(0));
const 감도 = ref(2);

let 시뮬레이션ID: NodeJS.Timeout | null = null;
let 시뮬레이션속도: number = 1; // 기본값은 1초

const ballClickHandler = (number: number) => {
  나온횟수.value++;
  if (나온구술배열.value.length >= 25) {
    나온구술배열.value.shift(); // 배열의 첫 번째 요소를 제거
  }
  나온구술배열.value.push(number);
  카운트배열.value = 카운트배열.value.map((count) => count + 1);
  카운트배열.value[number - 1] -= 38;

  // 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36 이 나왔을떄 카운트배열2 [0]은 -1 [1], [2] 는 +1
  // 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35 이 나왔을때 카운트배열2 [1]은 -1 [0], [2] 는 +1
  // 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 이 나왔을때 카운트배열2 [2]은 -1 [0], [1] 는 +1
  if ([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(number)) {
    카운트배열2.value[0] -= 2;
    카운트배열2.value[1]++;
    카운트배열2.value[2]++;
  } else if ([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(number)) {
    카운트배열2.value[0]++;
    카운트배열2.value[1] -= 2;
    카운트배열2.value[2]++;
  } else if ([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(number)) {
    카운트배열2.value[0]++;
    카운트배열2.value[1]++;
    카운트배열2.value[2] -= 2;
  }

  // 1~12 가 나왔을때 카운트배열2 [3] 은 -1 [4], [5] 는 +1
  // 13~24 가 나왔을때 카운트배열2 [4] 은 -1 [3], [5] 는 +1
  // 25~36 가 나왔을때 카운트배열2 [5] 은 -1 [3], [4] 는 +1
  if (number >= 1 && number <= 12) {
    카운트배열2.value[3] -= 2;
    카운트배열2.value[4]++;
    카운트배열2.value[5]++;
  } else if (number >= 13 && number <= 24) {
    카운트배열2.value[3]++;
    카운트배열2.value[4] -= 2;
    카운트배열2.value[5]++;
  } else if (number >= 25 && number <= 36) {
    카운트배열2.value[3]++;
    카운트배열2.value[4]++;
    카운트배열2.value[5] -= 2;
  }

  // 1~18 이 나왔을때 카운트배열2 [6] 은 -1 [11] 는 +1
  // 19~36 이 나왔을때 카운트배열2 [11] 은 -1 [6] 는 +1
  if (number >= 1 && number <= 18) {
    카운트배열2.value[6]--;
    카운트배열2.value[11]++;
  } else if (number >= 19 && number <= 36) {
    카운트배열2.value[6]++;
    카운트배열2.value[11]--;
  }

  // 짝수가 나왔을때 카운트배열2 [7] 은 -1 [10] 는 +1
  // 홀수가 나왔을때 카운트배열2 [10] 은 -1 [7] 는 +1
  if (number % 2 === 0) {
    카운트배열2.value[7]--;
    카운트배열2.value[10]++;
  } else {
    카운트배열2.value[7]++;
    카운트배열2.value[10]--;
  }

  // 빨강은 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
  // 검정은 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
  // 빨강이 나왔을때 카운트배열2 [8] 은 -1 [9] 는 +1
  // 검정이 나왔을때 카운트배열2 [9] 은 -1 [8] 는 +1
  if (
    [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    ].includes(number)
  ) {
    카운트배열2.value[8]--;
    카운트배열2.value[9]++;
  } else {
    카운트배열2.value[8]++;
    카운트배열2.value[9]--;
  }
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
      <div>
        <Button @click="감도++" size="sm">+</Button>
        {{ 감도 }}
        <Button @click="감도--">-</Button>
      </div>
      <Card
        class="w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0"
        >{{ 나온횟수 }}
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
      :카운트배열2="카운트배열2"
      :감도="감도"
      class="border border-white border-opacity-50"
    />
  </div>
</template>
