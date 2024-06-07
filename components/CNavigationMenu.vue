<script setup lang="ts">
const router = useRouter();
const currentUrl = ref();

onMounted(() => {
  const newCurrentUrl = router.currentRoute.value.fullPath;
  currentUrl.value = newCurrentUrl;
});
</script>
<template>
  <NavigationMenu>
    <NavigationMenuList class="px-8 py-4">
      <NavigationMenuItem>
        <NuxtLink to="/" class="px-2 font-bold" :class="{ 'text-blue-500': currentUrl == '/' }" @click="() => (currentUrl = '/')"> casino </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink to="/stock/kr" class="px-2" :class="{ 'text-blue-500': currentUrl == '/stock/kr' }" @click="() => (currentUrl = '/stock/kr')"> stock </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink to="/daisai" class="px-2" :class="{ 'text-blue-500': currentUrl == '/daisai' }" @click="() => (currentUrl = '/daisai')"> daisai </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink to="/roulette" class="px-2" :class="{ 'text-blue-500': currentUrl == '/roulette' }" @click="() => (currentUrl = '/roulette')"> roulette </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink to="/api" class="px-2" :class="{ 'text-blue-500': currentUrl == '/api' }" @click="() => (currentUrl = '/api')"> api </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
