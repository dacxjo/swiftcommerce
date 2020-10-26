<template>
  <div>
    <div class="flex justify-between mb-5">
      <sort-by @sortBy="setSortMethod"></sort-by>
      <span class="text-xs font-light text-gray-600"
        >Mostrando {{ productList.length }} de
        {{ productList.length }} productos</span
      >
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <product
        v-for="product in sortedProductList"
        :key="product.id"
        :data="product"
      />
    </div>
  </div>
</template>

<script>
//TODO: Centralize sort logic in sortBy component
export default {
  name: 'ProductList',
  props: {
    productList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortMethod: 'A-Z',
    }
  },
  methods: {
    setSortMethod($event) {
      this.sortMethod = $event
    },
    sortAlpha(a, b) {
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
    sortByPriceASC(a, b) {
      return a.price - b.price
    },
    sortByPriceDESC(a, b) {
      return b.price - a.price
    },
    sortByDate(a, b) {
      let da = new Date(a.createdAt),
        db = new Date(b.createdAt)
      return da - db
    },
  },
  computed: {
    sortedProductList() {
      const currentProductList = this.productList.slice()
      switch (this.sortMethod) {
        case 'A-Z':
          return currentProductList.sort(this.sortAlpha)
          break
        case 'p-asc':
          return currentProductList.sort(this.sortByPriceASC)
          break
        case 'p-desc':
          return currentProductList.sort(this.sortByPriceDESC)
          break
        case 'latest':
          return currentProductList.sort(this.sortByDate)
          break
        default:
          return currentProductList.sort(this.sortAlpha)
          break
      }
    },
  },
}
</script>