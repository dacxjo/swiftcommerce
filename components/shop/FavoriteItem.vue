<template>
  <div class="flex items-center mb-2 relative favorite-item">
    <nuxt-link :to="`/producto/${product.data.slug}`" class="flex items-center">
      <img
        width="40"
        height="40"
        class="object-cover mr-2 rounded"
        :src="product.data.image"
        :alt="product.data.name"
      >
      <span class="text-gray-700 text-sm">{{ product.data.name }}</span>
    </nuxt-link>

    <div class="delete-fav">
      <button>
        <img
          class="w-6"
          loading="lazy"
          src="~/assets/images/broken-heart.svg"
          alt="Wishlist"
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavoriteItem',
  props: ['product']
}
</script>

<style scoped>
.favorite-item:hover .delete-fav {
  opacity: 1;
}
.delete-fav {
  opacity: 0;
  transition: all ease 300ms;
  position: absolute;
  right: 0;
  width: 100px;
  background: linear-gradient(45deg, transparent, #0000000d);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), white);
}
</style>
