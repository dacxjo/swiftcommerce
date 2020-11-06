<template>
  <nav
    :class="{ 'admin-fixed': $store.getters['site/adminLoggedIn'] }"
    class="w-full h-16 flex justify-between items-center fixed bg-white z-50"
  >
    <div
      class="container mx-auto flex justify-between items-center px-4 lg:px-0"
    >
      <n-link class="text-2xl font-bold" to="/">
        {{ $store.getters['site/getSiteTitle'] }}
      </n-link>
      <ul class="flex items-center">
        <li>
          <shopping-cart />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>
.admin-fixed {
  top: 2.5rem;
}
</style>
