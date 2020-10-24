<template>
  <div class="flex flex-col items-start relative">
    <n-link
      :title="data.name"
      :to="productURL"
      class="w-full shadow h-64 rounded z-10 relative"
    >
      <div class="w-full bg-cover h-64 relative rounded">
        <img
          class="w-full h-full rounded object-contain lg:object-cover"
          :src="data.image"
          :alt="data.desc"
          loading="lazy"
        />
      </div>
    </n-link>
    <span
      class="py-2 text-sm font-light whitespace-no-wrap t-overflow text-gray-900"
    >
      {{ data.name }}</span
    >
    <p class="whitespace-no-wrap t-overflow text-xs text-gray-700">
      {{ data.desc }}
    </p>
    <div class="flex justify-between w-full items-center">
      <span class="text-base font-bold text-yellow-500">{{ data.price }}€</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productURL() {
      return `/productos/${this.data.slug}`
    },
  },
}
</script>

<style scoped>
.t-overflow {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
