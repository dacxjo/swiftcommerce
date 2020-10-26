<template>
  <div>
    <navbar />
    <Nuxt />
    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'Default',
  methods: {
    checkAdminLoggedIn() {
      let flag = localStorage.getItem('gotrue.user') ? true : falses
      this.$store.commit('site/setAdminLoggedIn',flag)
    },
  },
  mounted() {
    this.checkAdminLoggedIn()
  },
}
</script>