<template>
  <nav
    :class="{ 'admin-fixed': $store.getters['site/adminLoggedIn'] }"
    class="w-full h-16 flex justify-between items-center fixed bg-white dark:bg-blue-900 z-50 border-b border-gray-200"
  >
    <div
      class="container mx-auto flex justify-between items-center px-4 lg:px-0"
    >
      <n-link class="text-2xl font-bold" to="/">
        <template v-if="siteLogo">
          <img :src="siteLogo" class="w-32 object-cover" alt="">
        </template>
        <template v-else>
          {{ $store.getters['site/getSiteTitle'] }}
        </template>
      </n-link>
      <ul class="flex items-center">
        <li>
          <shop-wish-list />
        </li>
        <li v-if="!isCatalog">
          <shop-shopping-cart />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      isCatalog: 'site/isCatalog',
      siteLogo: 'site/getSiteLogo'
    })
  }
}
</script>

<style scoped>
.admin-fixed {
  top: 2.5rem;
}
</style>
