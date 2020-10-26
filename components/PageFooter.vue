<template>
  <footer class="w-full h-auto sm:h-16  flex items-center">
    <div class="w-full bg-white ">
      <div class="container mx-auto h-full w-full">
        <ul
          class="flex flex-col items-center py-5 sm:py-0 sm:flex-row justify-between h-full w-full"
        >
          <li>
            <span class="text-xs text-gray-500"
              >© {{ new Date().getFullYear() }}
              {{ $store.getters['site/getSiteTitle'] }}</span
            >
          </li>
          <li>
            <span class="text-sm text-gray-600"> Arpen Technologies </span>
          </li>
          <li>
            <n-link to="/terminos"> Términos legales </n-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>