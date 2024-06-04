<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="shrink-0">
      <CNavigationMenu class="shrink-0 h-fit" />
    </div>
    <Separator />
    <div class="grow-[0] h-full flex divide-x overflow-hidden">
      <div class="w-32 divide-y h-full overflow-y-scroll scrollbar-hide">
        <div v-for="item in 50" class="px-4 py-2">메뉴</div>
      </div>
      <div class="grow-[0] w-full overflow-y-scroll scrollbar-hide">
        <slot />
      </div>
    </div>
  </div>
</template>
