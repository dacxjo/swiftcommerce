<template>
  <main class="py-24 sm:py-32">
    <section class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
        <img
          class="w-full object-cover h-full border border-gray-300"
          loading="lazy"
          :src="product.image"
          :alt="product.description"
        >
        <div class="px-5 sm:px-0 flex flex-col justify-center">
          <h1 class="text-4xl font-bold text-center lg:text-left">
            {{ product.name }}
          </h1>
          <span
            class="text-3xl font-bold text-yellow-600 text-center lg:text-left"
          >{{ product.price }} €</span>
          <hr class="my-10">
          <p class="text-gray-800 text-lg leading-7 text-center lg:text-left">
            {{ product.description }}
          </p>
          <hr class="my-10">
          <div class="flex text-center justify-center lg:justify-start">
            <input
              value="1"
              min="1"
              type="number"
              class="w-1/6 mr-10 border border-black focus:outline-none px-4"
            >
            <button class="bg-black text-white py-4 px-12" @click="addToCart">
              Añadir al carrito
            </button>
          </div>
          <div class="my-10 text-center lg:text-left">
            <button class="font-bold">
              Añadir a lista de deseos
            </button>
          </div>
          <hr class="my-10">
          <div class="flex flex-col">
            <span
              class="text-gray-800 font-light"
            >Categoria:
              <span class="text-gray-700 text-sm font-light">{{
                category.name
              }}</span></span>

            <span class="text-gray-700 font-light">Comparte este producto</span>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto mt-10 hidden">
      <h2 class="text-center text-4xl font-bold">
        Productos similares
      </h2>
      <div class="h-screen bg-gray-300" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProductPage',
  async asyncData ({ $content, store, params }) {
    const product = await $content('productos')
      .where({ slug: params.slug })
      .fetch()
    const category = await $content('categorias')
      .where({ slug: product.category })
      .fetch()
    return {
      product: product[0],
      category: category[0]
    }
  },
  methods: {
    addToCart () {
      this.$nuxt.$emit('adding-to-cart')
      this.$store.commit('shop/addToCart', this.product)
    }
  }
}
</script>
