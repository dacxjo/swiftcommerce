<template>
  <footer class="w-full bg-black h-32 sm:h-16 flex items-center">
    <div class="w-full">
      <div class="container mx-auto h-full w-full">
        <ul
          class="flex flex-col items-center py-5 sm:py-0 sm:flex-row justify-between h-full w-full"
        >
          <li>
            <span
              class="text-xs text-white"
            >© {{ new Date().getFullYear() }}
              {{ $store.getters['site/getSiteTitle'] }}</span>
          </li>
          <li>
            <span class="text-sm text-white">{{
              $store.getters['site/getSiteTitle']
            }}</span>
          </li>
          <li>
            <n-link class="text-sm text-white" to="/terminos">
              Términos legales
            </n-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
