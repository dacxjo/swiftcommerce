<template>
  <div>
    <netlify-admin-bar v-if="$store.getters['site/adminLoggedIn']" />
    <navbar ref="navbar" />
    <nuxt />
    <shopping-cart-list v-if="$store.getters['shop/getToggleCartList']" />
    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'Page',
  mounted () {
    this.checkAdminLoggedIn()
  },
  methods: {
    checkAdminLoggedIn () {
      const flag = !!localStorage.getItem('gotrue.user')
      this.$store.commit('site/setAdminLoggedIn', flag)
    }
  }
}
</script>

<style>
.index {
  height: 80vh;
  @apply bg-cover;
}

.calc-top {
  top: 6.5rem;
}
</style>
