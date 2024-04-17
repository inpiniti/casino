<script setup lang="ts">
const 랜덤구술 = ref<number>(0);
const 나온구술배열 = ref<number[]>([]);
const 카운트배열 = ref<number[]>(Array(38).fill(0));
const 배팅금액배열 = ref<number[]>(Array(38).fill(0));

const 랜덤구술생성 = () => {
  랜덤구술.value = Math.floor(Math.random() * 38);
  나온구술배열.value.push(랜덤구술.value);
  카운트배열.value = 카운트배열.value.map((value, index) => (index === 랜덤구술.value ? 0 : value + 1));

  배팅액설정();
};

// 배팅액은 카운트 배열을 보고 설정을 해줘,
// 규칙은 0(36/1) = 1
// (36/1)+1(36/1)+(36/2) = 2,
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
    <div></div>
  </div>
</template>
