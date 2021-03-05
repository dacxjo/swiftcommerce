<template>
  <div>
    <netlify-admin-bar v-if="$store.getters['site/adminLoggedIn']" />
    <navbar ref="navbar" />
    <hero-section />
    <main>
      <template>
        <section
          class="container mx-auto my-10 h-auto p-4 lg:p-0 grid grid-cols-1 sm:grid-cols-4 gap-10"
        >
          <!--TODO: Make search and filter a component -->
          <aside class="w-full h-96 col-span-1 hidden lg:block sticky calc-top">
            <div class="flex-col flex">
              <h3 class="text-lg text-black font-normal tracking-widest">
                Buscar
              </h3>
              <input
                class="border-b border-r border-gray-300 focus:outline-none mt-2 text-gray-500"
                type="text"
                placeholder="Busca un producto"
                @keyup="handleSearch"
              >
            </div>
            <div v-if="false" class="flex flex-col mt-5">
              <h3 class="text-lg text-black font-normal tracking-widest">
                Filtrar por
              </h3>
              <label
                for="search"
                class="text-base mt-2 text-gray-600 font-light"
              >Precio</label>
              <vue-slider
                v-model="selectedRange"
                :max="pricesRange[1]"
                :min="pricesRange[0]"
                :enable-cross="false"
              />
              <form
                class="grid grid-cols-3 gap-5 mt-2"
                action=""
                @submit.prevent=""
              >
                <input
                  v-model="selectedRange[0]"
                  :max="pricesRange[1]"
                  :min="pricesRange[0]"
                  class="border border-gray-300 px-2 focus:outline-none"
                  type="number"
                >
                <input
                  v-model="selectedRange[1]"
                  :max="pricesRange[1]"
                  :min="pricesRange[0]"
                  class="border border-gray-300 px-2 focus:outline-none"
                  type="number"
                >
                <button type="submit" class="bg-gray-200">
                  Filtrar
                </button>
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
              >
                Todos<sup class="text-gray-500">{{ allProductsLength }}</sup>
              </n-link>
              <n-link
                v-for="cat in categories"
                :key="cat.id"
                exact-active-class="active-category"
                exact
                :to="{ path: `/categoria/${cat.slug}` }"
                class="text-sm font-light mt-2 text-gray-600"
              >
                {{ cat.name
                }}<sup class="text-gray-500">{{
                  $store.getters['shop/getNumOfProductsByCat'](cat.slug)
                }}</sup>
              </n-link>
            </div>
          </aside>
          <Nuxt />
        </section>

        <section class="w-full mt-16 bg-gray-200 h-64" />
      </template>
    </main>

    <shopping-cart-list v-if="$store.getters['shop/getToggleCartList']" />
    <page-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Default',
  data () {
    return {
      categories: []
    }
  },
  async mounted () {
    this.checkAdminLoggedIn()
    this.categories = await this.$content('categorias').fetch()
    this.$store.commit('shop/setCategories', this.categories)
  },
  methods: {
    checkAdminLoggedIn () {
      const flag = !!localStorage.getItem('gotrue.user')
      this.$store.commit('site/setAdminLoggedIn', flag)
    },
    handleSearch (event) {
      this.$nuxt.$emit('searching-product', {
        query: event.target.value
      })
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      productsLength: 'shop/getProductsLength',
      allProductsLength: 'shop/getAllProductsLength'
    })
  }
}
</script>

<style>
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

.home-enter-active,
.home-leave-active {
  transition: opacity 0.3s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
