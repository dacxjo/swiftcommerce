<template>
  <div class="block w-full h-auto shadow rounded items-start relative">
    <n-link :title="data.name" :to="productURL" class="z-10 relative">
      <div class="w-full bg-cover h-64 relative rounded">
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
        <button class="flex text-xs font-light" @click="addToCart">
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
export default {
  name: 'Product',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    productURL () {
      return `/productos/${this.data.slug}`
    }
  },
  methods: {
    addToCart () {
      this.$nuxt.$emit('adding-to-cart')
      this.$store.commit('shop/addToCart', {
        quantity: 1,
        id: this.data.id
      })
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
