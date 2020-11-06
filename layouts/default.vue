<template>
  <div>
    <netlify-admin-bar v-if="$store.getters['site/adminLoggedIn']" />
    <navbar ref="navbar" />
    <Nuxt />
    <shopping-cart-list v-if="$store.getters['shop/getToggleCartList']" />
    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'Default',
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
