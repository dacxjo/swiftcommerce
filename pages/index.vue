<template>
  <main>
    <template>
      <section
        :style="{ backgroundImage: `url(${heroImage})` }"
        class="index bg-gray-100 flex flex-col justify-center items-center"
      >
        <div
          class="container mx-auto flex flex-col justify-center items-center p-4 lg:p-0"
        >
          <h1 class="font-bold text-5xl lg:text-6xl text-center">
            {{ heroTitle }}
          </h1>
          <p class="text-center">
            {{ heroDesc }}
          </p>
          <n-link to="/" class="bg-black text-white p-2 mt-4">
            Button text
          </n-link>
        </div>
      </section>
      <section
        class="container mx-auto my-10 h-auto p-4 lg:p-0 grid grid-cols-1 sm:grid-cols-4 gap-10"
      >
        <!--TODO: Make search and filter a component -->
        <div class="w-full h-96 col-span-1 hidden lg:block sticky calc-top">
          <div class="flex-col flex">
            <h3 class="text-lg text-black font-normal tracking-widest">
              Buscar
            </h3>
            <input
              v-model="query"
              class="border-b border-r border-gray-300 focus:outline-none mt-2 text-gray-500"
              type="text"
              placeholder="Busca un producto"
            />
          </div>
          <div class="flex flex-col mt-5" v-if="false">
            <h3 class="text-lg text-black font-normal tracking-widest">
              Filtrar por
            </h3>
            <label for="search" class="text-base mt-2 text-gray-600 font-light"
              >Precio</label
            >
            <vue-slider
              v-model="selectedRange"
              :max="pricesRange[1]"
              :min="pricesRange[0]"
              :enable-cross="false"
            ></vue-slider>
            <form
              @submit.prevent=""
              class="grid grid-cols-3 gap-5 mt-2"
              action=""
            >
              <input
                :max="pricesRange[1]"
                :min="pricesRange[0]"
                v-model="selectedRange[0]"
                class="border border-gray-300 px-2 focus:outline-none"
                type="number"
              />
              <input
                :max="pricesRange[1]"
                :min="pricesRange[0]"
                v-model="selectedRange[1]"
                class="border border-gray-300 px-2 focus:outline-none"
                type="number"
              />
              <button type="submit" class="bg-gray-200">Filtrar</button>
            </form>
          </div>

          <div class="flex flex-col mt-5">
            <h3 class="text-lg text-black font-normal tracking-widest">
              Categorías
            </h3>
            <n-link
              exact-active-class="active-category"
              class="text-sm mt-2 text-gray-600 font-light"
              to="/"
              >Todos<sup class="text-gray-500">{{
                allProductsLength
              }}</sup></n-link
            >
            <n-link
              exact-active-class="active-category"
              :to="{ path: '/', query: { category: cat.slug } }"
              v-for="cat in categories"
              :key="cat.id"
              class="text-sm font-light mt-2 text-gray-600"
              >{{ cat.name
              }}<sup class="text-gray-500">{{
                $store.getters['shop/getNumOfProductsByCat'](cat.slug)
              }}</sup></n-link
            >
          </div>
        </div>
        <div class="col-span-3 sm:col-span-4 lg:col-span-3">
          <template v-if="filteredProducts.length">
            <product-list :productList="filteredProducts"></product-list>
          </template>
          <template v-else>
            <p>No se han encontrado resultados</p>
          </template>
        </div>
      </section>

      <section class="w-full mt-16 bg-gray-200 h-64"></section>
    </template>
  </main>
</template>

<script>
//TODO: Move filter and search logic to component
import { mapGetters } from 'vuex'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'Index',
  components: {
    VueSlider,
  },
  scrollToTop: false,
  watchQuery: true,
  async asyncData({ $content, store, query }) {
    let products, allProducts

    allProducts = await $content('productos').fetch()

    if (query.category) {
      products = await $content('productos')
        .where({ category: query.category })
        .fetch()
    } else {
      products = await $content('productos').fetch()
    }

    const categories = await $content('categorias').fetch()

    store.commit('shop/setAllProducts', allProducts)
    store.commit('shop/setProducts', products)
    store.commit('shop/setCategories', categories)

    return {
      products,
      categories,
    }
  },

  data() {
    return {
      query: '',
      selectedRange: [0, 0],
    }
  },
  mounted() {
    this.selectedRange = [this.pricesRange[0], this.pricesRange[1]]
  },
  computed: {
    ...mapGetters({
      heroTitle: 'site/getHeroTitle',
      heroDesc: 'site/getHeroDesc',
      heroImage: 'site/getHeroImg',
      productsLength: 'shop/getProductsLength',
      allProductsLength: 'shop/getAllProductsLength',
    }),
    filteredProducts() {
      if (this.query) {
        return this.products.filter((r) =>
          r.name.toLowerCase().match(this.query.toLowerCase())
        )
      } else {
        return this.products
      }
    },
    pricesRange() {
      let maxPrice = Math.max.apply(
        Math,
        this.filteredProducts.map((p) => {
          return p.price
        })
      )
      let minPrice = Math.min.apply(
        Math,
        this.filteredProducts.map((p) => {
          return p.price
        })
      )
      return [minPrice, maxPrice]
    },
  },
}
</script>

<style scoped>
.index {
  height: 80vh;
  @apply bg-cover;
}

.calc-top {
  top: 6.5rem;
}

.active-category {
  @apply text-black;
  @apply font-medium;
}
</style>