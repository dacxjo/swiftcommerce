<template>
  <div>
    <div class="flex justify-between mb-5"> 
        <sort-by></sort-by>
        <span class="text-xs font-light text-gray-600">Mostrando {{productList.length}} de {{productList.length}} productos</span>
    </div>
    <div class="grid grid-cols-3 gap-10">
      <product v-for="product in productList" :key="product.id" :data="product" />
    </div>
  </div>
</template>

<script>
export default {
    name:'ProductList',
    props:{
        productList:{
            type: Array,
            required:true
        }
    }
}
</script>