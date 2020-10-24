<template>
  <main>
    <section
      :style="{backgroundImage:`url(${heroImage})`}"
      class="index bg-gray-400 flex flex-col justify-center items-center"
    >
      <div
        class="container mx-auto flex flex-col justify-center items-center p-4 lg:p-0"
      >
        <h1 class="font-bold text-5xl lg:text-6xl text-center">{{ heroTitle }}</h1>
        <p class="text-center">
          {{heroDesc}}
        </p>
        <n-link to="/" class="bg-black text-white p-2 mt-4 rounded">
          Button text
        </n-link>
      </div>
    </section>
    <section class="container mx-auto h-screen p-4 lg:p-0">
      <h2 class="text-center py-4 text-2xl">Productos recientes</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        <product
          v-for="product in products"
          :key="product.id"
          :data="product"
        />
      </div>
    </section>
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
  async asyncData({ $content }) {
    const products = await $content('productos').fetch()
    return {
      products,
    }
  },
  computed: {
    ...mapGetters({
      heroTitle: 'site/getHeroTitle',
      heroDesc: 'site/getHeroDesc',
      heroImage: 'site/getHeroImg',
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