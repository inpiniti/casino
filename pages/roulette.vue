<script setup lang="ts">
const 랜덤구술 = ref<number>(0);
const 나온구술배열 = ref<number[]>([]);
const 카운트배열 = ref<number[]>(Array(38).fill(0));
const 배팅금액배열 = ref<number[]>(Array(38).fill(0));
const 현재코인 = ref<number>(50);

let 시뮬레이션ID: NodeJS.Timeout | null = null;
let 시뮬레이션속도: number = 1000; // 기본값은 1초

const 직접구술생성 = (num: number) => {
  랜덤구술.value = num;
  나온구술배열.value.push(랜덤구술.value);
  카운트배열.value = 카운트배열.value.map((value, index) => (index === 랜덤구술.value ? 0 : value + 1));

  배팅액설정();
};

const 랜덤구술생성 = () => {
  직접구술생성(Math.floor(Math.random() * 38));
};

const 시뮬레이션시작 = () => {
  if (시뮬레이션ID !== null) return; // 이미 실행 중이면 무시
  시뮬레이션ID = setInterval(랜덤구술생성, 시뮬레이션속도); // 시뮬레이션속도마다 랜덤구술생성 호출
};

const 시뮬레이션중지 = () => {
  if (시뮬레이션ID === null) return; // 실행 중이 아니면 무시
  clearInterval(시뮬레이션ID);
  시뮬레이션ID = null;
};

const 시뮬레이션속도조절 = (속도: number) => {
  if (속도 < 0 || 속도 > 1000) return; // 속도가 0~1000 사이가 아니면 무시
  시뮬레이션속도 = 속도;
  if (시뮬레이션ID !== null) {
    // 시뮬레이션이 실행 중이면 재시작
    clearInterval(시뮬레이션ID);
    시뮬레이션ID = setInterval(랜덤구술생성, 시뮬레이션속도);
  }
};

// 배팅액은 카운트 배열을 보고 설정을 해줘,
// 규칙은 0 ~ (36/1) = 1
// (36/1)+1 ~ (36/1)+(36/2) = 2,
// (36/1)+(36/2)+1 ~ (36/1)+(36/2)+(36/3) = 3,
// (36/1)+(36/2)+(36/3)+1 ~ (36/1)+(36/2)+(36/3)+(36/4) = 4,
// (36/1)+(36/2)+(36/3)+(36/4)+1 ~ (36/1)+(36/2)+(36/3)+(36/4)+(36/5) = 5, ... 이런식이다.
const 배팅액설정 = () => {
  let limit = 36;
  let i = 1;
  while (i <= 38) {
    배팅금액배열.value = 배팅금액배열.value.map((value, index) => {
      if (카운트배열.value[index] >= limit - 36 / i + 1 && 카운트배열.value[index] <= limit) {
        return i - 1;
      }
      return value;
    });
    limit += 36 / i;
    i++;
  }
};
</script>
<template>
  <div>
    <div>배팅 규칙</div>
    <div>0(36/1) = 1</div>
    // 규칙은 0(36/1) = 1 // (36/1)+1(36/1)+(36/2) = 2, // (36/1)+(36/2)+1 ~ (36/1)+(36/2)+(36/3) = 3, // (36/1)+(36/2)+(36/3)+1 ~ (36/1)+(36/2)+(36/3)+(36/4) = 4, // (36/1)+(36/2)+(36/3)+(36/4)+1 ~
    (36/1)+(36/2)+(36/3)+(36/4)+(36/5) = 5, ... 이런식이다.
  </div>
</template>
