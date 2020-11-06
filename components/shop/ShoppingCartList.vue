<template>
  <div>
    <div
      role="button"
      style="background: rgba(0, 0, 0, 0.3)"
      class="fixed top-0 right-0 w-full h-screen shadow-xs z-50"
      @click="toggleCartList"
    />
    <div
      :class="{
        '-translate-x-0': showSidebar,
        'translate-x-full': !showSidebar,
      }"
      class="fixed top-0 bottom-0 right-0 w-3/4 sm:w-1/3 h-full bg-white shadow-xs z-50 duration-300 transform transition-transform"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSidebar: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showSidebar = true
    }, 300)
  },
  methods: {
    toggleCartList () {
      this.showSidebar = false
      setTimeout(() => {
        this.$store.commit('shop/toggleCartList')
        document.body.style.overflow = 'auto'
      }, 400)
    }
  }
}
</script>
