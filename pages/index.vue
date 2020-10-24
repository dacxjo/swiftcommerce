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
    </template>
    <template v-else>
      <section class="w-full h-screen flex flex-col justify-center items-center relative">
          <h2 class="text-6xl text-gray-800">Bienvenido a tu nueva tienda online</h2>
          <h3>Empieza añadiendo la información de tu nuevo sitio y productos en el <a href="/admin" class="font-semibold text-blue-400">panel de administración</a> </h3>
          <a href="/admin" class="bg-gray-800 text-white px-4 py-2 rounded mt-4">Empezar ahora</a>

          <div class="absolute bottom-0 right-0 h-10 w-full bg-gray-200 flex items-center justify-center">
              <p class="text-gray-600 text-xs font-light">¿Tienes dudas o preguntas? Contáctanos en <a target="_blank" class="text-gray-900" href="https://arpentechnologies.com/es/contacto/">Arpen Technologies</a></p>
          </div>
      </section>
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