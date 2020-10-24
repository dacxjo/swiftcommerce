<template>
  <main>
    <template v-if="productsLength">
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
          <n-link to="/" class="bg-black text-white p-2 mt-4 rounded">
            Button text
          </n-link>
        </div>
      </section>
      <section
        class="container mx-auto mt-10 h-screen p-4 lg:p-0 grid grid-cols-3 gap-10"
      >
        <div class="bg-gray-200 w-full h-64 col-span-1">
          <h2>Filter sections</h2>
        </div>
        <div class="col-span-2">
            <product-list :productList="products"></product-list>
        </div>
      </section>
    </template>
    <template v-else>
      <init-view></init-view>
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  async asyncData({ $content, store }) {
    const products = await $content('productos').fetch()
    store.commit('shop/setProducts', products)
    return {
      products,
    }
  },
  computed: {
    ...mapGetters({
      heroTitle: 'site/getHeroTitle',
      heroDesc: 'site/getHeroDesc',
      heroImage: 'site/getHeroImg',
      productsLength: 'shop/getProductsLength',
    }),
  },
}
</script>

<style scoped>
.index {
  height: 80vh;
  @apply bg-cover;
}
</style>