<template>
  <div>
    <netlify-admin-bar v-if="$store.getters['site/adminLoggedIn']" /> 
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
      let flag = localStorage.getItem('gotrue.user') ? true : false
      this.$store.commit('site/setAdminLoggedIn',flag)
    },
  },
  mounted() {
    this.checkAdminLoggedIn()
  },
}
</script>