<template>
  <div class="block w-full h-auto shadow rounded items-start relative">
    <n-link :title="data.name" :to="productURL" class="z-10 relative">
      <div class="w-full bg-cover h-64 relative rounded">
        <button
          ref="fav"
          class="absolute top-0 right-0 w-10 h-10 focus:outline-none"
          @click.prevent="likeTrigger"
        />
        <img
          class="w-full h-full rounded object-cover lg:object-cover"
          :src="data.image"
          :alt="data.desc"
          loading="lazy"
        >
      </div>
    </n-link>
    <div class="p-2">
      <span
        class="py-2 text-sm font-normal whitespace-no-wrap t-overflow text-gray-900"
      >
        {{ data.name }}</span>
      <div class="flex justify-between w-full items-center">
        <span
          class="text-base text-gray-900 tracking-widest font-semibold"
        >{{ data.price }}€</span>
        <button
          v-if="!isCatalog"
          class="flex text-xs font-light"
          @click="addToCart"
        >
          <img
            class="w-4 mr-2"
            loading="lazy"
            src="~/assets/images/shopping-cart.svg"
            alt="cart"
          >
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import lottie from 'lottie-web'
import * as animation from '@/static/lottie/like.json'
export default {
  name: 'Product',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      anim: null,
      isLiked: false
    }
  },
  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.fav, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: JSON.parse(JSON.stringify(animation.default))
    })

    this.checkLiked()

    if (this.isLiked) {
      this.anim.goToAndPlay(75, true)
    }
  },
  computed: {
    ...mapGetters({
      isCatalog: 'site/isCatalog',
      favoritesProducts: 'site/favoritesProducts'
    }),
    productURL () {
      return `/producto/${this.data.slug}`
    }
  },

  methods: {
    checkLiked () {
      for (const p of this.favoritesProducts) {
        if (p.data.id === this.data.id) {
          this.isLiked = true
        }
      }
    },
    addToCart () {
      this.$nuxt.$emit('adding-to-cart')
      this.$store.commit('shop/addToCart', {
        quantity: 1,
        data: this.data
      })
    },
    likeTrigger () {
      if (this.isLiked) {
        this.anim.stop()
      } else {
        this.anim.play()
        this.$store.commit('site/addFavorite', {
          data: this.data
        })
      }
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style scoped>
.t-overflow {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
