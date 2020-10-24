<template>
  <div>
    <navbar />
    <Nuxt />
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