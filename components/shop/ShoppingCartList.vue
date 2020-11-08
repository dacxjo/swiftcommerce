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
    >
      <ul>
        <li v-for="item in items" :key="item.data[0].id">
          <img loading="lazy" :src="item.data[0].image" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showSidebar: false,
      items: []
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'shop/getCartItems'
    })
  },
  mounted () {
    setTimeout(() => {
      this.showSidebar = true
    }, 300)

    this.getFullDataItems()
  },
  methods: {
    async getFullDataItems () {
      await this.cartItems.forEach(async (item) => {
        const data = await this.$content('productos').where({ id: item.id }).fetch()
        this.items.push({
          data,
          quantity: item.quantity
        })
      })
    },
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
