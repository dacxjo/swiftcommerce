<template>
  <li class="py-10 px-5 flex">
    <img
      class="w-24 h-24 object-cover"
      loading="lazy"
      :src="item.data.image"
      :alt="item.data.name"
    >
    <div class="ml-5 flex justify-between w-full">
      <div>
        <h5 class="font-bold">
          {{ item.data.name }}
        </h5>
        <div>
          <button @click="removeOneUnit()">
            -
          </button>
          <span>{{ itemQuantity }}</span>
          <button @click="addOneUnit()">
            +
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <span>{{ itemTotal }}</span>
        <button @click="removeItem()">
          Borrar
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemTotal () {
      return this.item.data.price * this.itemQuantity
    },
    itemQuantity () {
      return this.$store.getters['shop/getCartItemQuantity'](this.item)
    }
  },
  methods: {
    addOneUnit () {
      this.$store.commit('shop/addToCart', this.item)
      this.$forceUpdate()
    },
    removeOneUnit () {
      this.$store.commit('shop/removeOneUnit', this.item)
      this.$forceUpdate()
    },
    removeItem () {
      this.$store.commit('shop/removeFromCart', this.item)
      this.$forceUpdate()
    }
  }
}
</script>
