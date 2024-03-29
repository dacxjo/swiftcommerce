<template>
  <div class="block w-full h-auto shadow rounded items-start relative">
    <n-link :title="data.name" :to="productURL" class="z-10 relative">
      <div class="w-full bg-cover h-64 relative rounded">
        <div class="overflow-hidden w-full h-full relative">
          <button
            ref="fav"
            class="absolute z-20 top-0 right-0 w-10 h-10 focus:outline-none"
            @click.prevent="likeTrigger"
          />
          <img
            class="w-full h-full rounded object-cover lg:object-cover product-image"
            :src="data.image"
            :alt="data.desc"
            loading="lazy"
          >
        </div>
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
        >{{ data.price }}{{ data.currency | currencyFilter }}</span>
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
  filters: {
    currencyFilter (value) {
      switch (value) {
        case 'NIO':
          return 'C$'
        case 'USD':
          return '$'
        case 'EUR':
          return '€'
        default:
          return 'C$'
      }
    }
  },
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

    this.$nuxt.$on('removed-fav', (payload) => {
      if (payload.removed.data.id === this.data.id) {
        this.isLiked = false
        this.anim.stop()
      }
    })

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
        this.$store.commit('site/removeFromFavorites', {
          data: this.data
        })
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

.product-image {
  will-change: transform;
  transition: all 300ms ease;
}

.product-image:hover {
  transform: scale(1.3);
}
</style>
