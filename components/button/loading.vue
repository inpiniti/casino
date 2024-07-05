<script lang="ts" setup>
const { count, intervalId, loading } = useLoading().value;

onMounted(() => {
  intervalId.value = setInterval(() => {
    if (loading.value) return;
    count.value -= 1;
    if (count.value === 0) {
      onClickLoading();
    }
  }, 1000);
});
const onClickLoading = () => {
  if (loading.value) return;
  loading.value = true;
};
</script>
<template>
  <Button class="flex gap-2" @click="onClickLoading">
    <font-awesome-icon icon="rotate-right" :spin="loading" />
    <div v-if="loading">Loading...</div>
    <div v-else>{{ count }}</div>
  </Button>
</template>
