<template>
  <div class="container mx-auto flex flex-col">
    <h1 class="text-3xl">Demo</h1>
    <div  class="w-64 border border-gray-300" :key="index" v-for="(product, index) in products">
      <span>{{ product.name }}</span>
      <span>{{ product.desc }}</span>
      <span>{{ product.price }}</span>
      <img width="120" :src="product.image" :alt="product.desc" :title="product.name">
    </div>
  </div>
</template>

<script>
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
}
</script>

<style>

</style>
