<template>
  <div>
    <div
      role="button"
      @click="toggleCartList"
      style="background: rgba(0, 0, 0, 0.3)"
      class="absolute top-0 right-0 w-full h-screen shadow-xs z-50"
    ></div>
    <div
      :class="{
        '-translate-x-0': showSidebar,
        'translate-x-full': !showSidebar,
      }"
      class="absolute top-0 right-0 w-1/3 h-screen bg-white shadow-xs z-50 duration-300 transform transition-transform"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    }
  },
  methods: {
    toggleCartList() {
      this.showSidebar = false
      setTimeout(() => {
        this.$store.commit('shop/toggleCartList')
        document.body.style.overflow = "auto";
      }, 400)
    },
  },
  mounted() {
    setTimeout(() => {
      this.showSidebar = true
    }, 300)
  },
}
</script>