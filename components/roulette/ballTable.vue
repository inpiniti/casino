<script setup lang="ts"></script>
<template>
  <div class="flex bg-red-800 w-fit">
    <RouletteBallTbody
      :numbers="[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
      ]"
      :colors="[
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
      ]"
    />
    <RouletteBallTbody
      :numbers="[
        [13, 14, 15],
        [16, 17, 18],
        [19, 20, 21],
        [22, 23, 24],
      ]"
      :colors="[
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
      ]"
    />
    <RouletteBallTbody
      :numbers="[
        [25, 26, 27],
        [28, 29, 30],
        [31, 32, 33],
        [34, 35, 36],
      ]"
      :colors="[
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
        ['red', 'black', 'red'],
        ['black', 'red', 'black'],
      ]"
    />
  </div>
</template>
