<template>
  <div>
    <div class="relative">
      <button ref="cart" class="w-12 h-12" @click="toggleCartList" />
      <span
        class="absolute top-0 right-0 w-4 h-4 rounded-full bg-black text-xs text-white cart-badge text-center"
      >{{ itemsInCart }}</span>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { mapGetters } from 'vuex'
import * as animation from '~/static/lottie/cart.json'

export default {
  name: 'ShoppingCart',
  data () {
    return {
      cartAnim: null
    }
  },
  computed: {
    ...mapGetters({
      itemsInCart: 'shop/getNumOfItemsInCart'
    })
  },
  mounted () {
    const anim = lottie.loadAnimation({
      container: this.$refs.cart, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: JSON.parse(JSON.stringify(animation.default))
    })
    anim.goToAndStop(20, true)
    this.cartAnim = anim

    this.$nuxt.$on('adding-to-cart', this.animateCart)
  },
  methods: {
    animateCart () {
      this.cartAnim.goToAndPlay(0, true)
    },
    toggleCartList () {
      this.$store.commit('shop/toggleCartList')
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped>
.card-badge {
  top: 5%;
  right: 5%;
}
</style>
