<template>
  <nav
    class="w-full h-16 flex justify-between items-center fixed bg-white z-50"
  >
    <div class="container mx-auto flex justify-between px-4 lg:px-0">
      <n-link to="/">
        <span class="text-2xl font-bold">{{$store.getters['site/getSiteTitle']}}</span>
      </n-link>
      <ul class="flex items-center">
      
      </ul>
    </div>
  </nav>
</template>
