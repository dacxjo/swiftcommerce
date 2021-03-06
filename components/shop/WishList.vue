<template>
  <div class="relative">
    <div class="relative">
      <button
        ref="wishlist"
        title="Lista de deseos"
        class="w-12 h-12"
        @click="showFavList"
      >
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
    <transition mode="out-in" name="fade">
      <div
        v-if="showList"
        class="bg-white shadow absolute right-0 w-64 h-auto p-2 rounded favorites-dropdown"
      >
        <shop-favorite-item
          v-for="p in favoritesProducts"
          :key="p.data.id"
          :product="p"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WishList',
  data () {
    return {
      showList: false
    }
  },
  computed: {
    ...mapGetters({
      itemsInCart: 'shop/getNumOfItemsInCart',
      favoritesCount: 'site/favoritesCount',
      favoritesProducts: 'site/favoritesProducts'
    })
  },
  watch: {
    favoritesCount (newVal, oldVal) {
      if (newVal === 0) {
        this.showList = false
      }
    }
  },
  methods: {
    showFavList () {
      if (this.favoritesCount > 0) {
        this.showList = !this.showList
      }
    }
  }
}
</script>

<style scoped>
.card-badge {
  top: 5%;
  right: 5%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
