<template>
  <div>
    <div class="flex justify-between mb-5">
      <shop-sort-by @sortBy="setSortMethod" />
      <span
        class="text-xs font-light text-gray-700"
      >{{ productList.length }} de {{ productList.length }} productos</span>
    </div>

    <transition-group
      mode="out-in"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      name="list-complete"
    >
      <shop-product
        v-for="product in sortedProductList"
        :key="product.slug"
        class="list-complete-item"
        :data="product"
      />
      <shop-placeholders-product-placeholder
        v-if="$store.getters['site/adminLoggedIn']"
        key="placeholder"
      />
    </transition-group>
  </div>
</template>

<script>
// TODO: Centralize sort logic in sortBy component
export default {
  name: 'ProductList',
  props: {
    productList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      sortMethod: 'A-Z'
    }
  },
  computed: {
    sortedProductList () {
      const currentProductList = this.productList.slice()
      switch (this.sortMethod) {
        case 'A-Z':
          return currentProductList.sort(this.sortAlpha)
        case 'p-asc':
          return currentProductList.sort(this.sortByPriceASC)
        case 'p-desc':
          return currentProductList.sort(this.sortByPriceDESC)
        case 'latest':
          return currentProductList.sort(this.sortByDate)
        default:
          return currentProductList.sort(this.sortAlpha)
      }
    }
  },
  methods: {
    setSortMethod ($event) {
      this.sortMethod = $event
    },
    sortAlpha (a, b) {
      a = a.name.toLowerCase()
      b = b.name.toLowerCase()
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }

      return 0
    },
    sortByPriceASC (a, b) {
      return a.price - b.price
    },
    sortByPriceDESC (a, b) {
      return b.price - a.price
    },
    sortByDate (a, b) {
      const da = new Date(a.createdAt)
      const db = new Date(b.createdAt)
      return da - db
    }
  }
}
</script>

<style scoped>
.list-complete-item {
  transition: all 300ms;

  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
  opacity: 0;
}
</style>
