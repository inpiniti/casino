<template>
  <div class="w-screen h-screen flex flex-col">
    <div>
      <CNavigationMenu class="shrink-0 h-fit" />
    </div>
    <Separator />
    <div class="grow-[0]">
      <slot />
    </div>
  </div>
</template>
