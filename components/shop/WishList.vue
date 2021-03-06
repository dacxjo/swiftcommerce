<template>
  <div class="relative">
    <div class="relative">
      <button ref="wishlist" title="Lista de deseos" class="w-12 h-12">
        <img
          class="w-8"
          loading="lazy"
          src="~/assets/images/heart.svg"
          alt="Wishlist"
        >
      </button>

      <span
        class="absolute top-0 right-0 w-4 h-4 rounded-full bg-black text-xs text-white cart-badge text-center"
      >{{ favoritesCount }}</span>
    </div>
    <div
      class="bg-white shadow absolute right-0 w-64 h-auto p-2 rounded favorites-dropdown"
    >
      <shop-favorite-item
        v-for="p in favoritesProducts"
        :key="p.data.id"
        :product="p"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WishList',
  data () {
    return {
      cartAnim: null
    }
  },
  computed: {
    ...mapGetters({
      itemsInCart: 'shop/getNumOfItemsInCart',
      favoritesCount: 'site/favoritesCount',
      favoritesProducts: 'site/favoritesProducts'
    })
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.card-badge {
  top: 5%;
  right: 5%;
}
.favorites-dropdown {
}
</style>
