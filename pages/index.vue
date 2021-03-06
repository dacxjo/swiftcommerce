<template>
  <div class="col-span-3 sm:col-span-4 lg:col-span-3">
    <template v-if="filteredProducts.length">
      <shop-product-list :product-list="filteredProducts" />
    </template>
    <template v-else>
      <p>No se han encontrado resultados</p>
    </template>
  </div>
</template>

<script>
// TODO: Move filter and search logic to component

export default {
  name: 'Index',
  scrollToTop: false,
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  async asyncData ({ $content, store, query }) {
    const allProducts = await $content('productos').fetch()

    const products = await $content('productos').fetch()

    store.commit('shop/setAllProducts', allProducts)
    store.commit('shop/setProducts', products)

    return {
      products
    }
  },
  data () {
    return {
      query: '',
      selectedRange: [0, 0]
    }
  },
  computed: {
    filteredProducts () {
      if (this.query) {
        return this.products.filter(r =>
          r.name.toLowerCase().match(this.query.toLowerCase())
        )
      } else {
        return this.products
      }
    },
    pricesRange () {
      const maxPrice = Math.max.apply(
        Math,
        this.filteredProducts.map((p) => {
          return p.price
        })
      )
      const minPrice = Math.min.apply(
        Math,
        this.filteredProducts.map((p) => {
          return p.price
        })
      )
      return [minPrice, maxPrice]
    }
  },

  mounted () {
    this.selectedRange = [this.pricesRange[0], this.pricesRange[1]]
    this.$nuxt.$on('searching-product', (params) => {
      this.query = params.query
    })
    // eslint-disable-next-line no-console
    console.log(process.env.CATALOG_MODE)
  }
}
</script>
