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
      <template v-if="cartItems.length">
        <ul>
          <shopping-cart-item
            v-for="item in cartItems"
            :key="item.data.id"
            :item="item"
          />
        </ul>
      </template>
      <template v-else>
        <div class="flex flex-col justify-center h-full w-full items-center">
          <div class="flex flex-col items-center">
            <img
              class="w-16 mr-2"
              loading="lazy"
              src="~/assets/images/conjunto-vacio.svg"
              alt="Vacio"
            >
            <h4 class="font-semibold mt-4">
              Tu carrito está vacio
            </h4>
            <p class="text-xs text-gray-500">
              ¿Que te apetece comprar hoy?
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showSidebar: false
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
