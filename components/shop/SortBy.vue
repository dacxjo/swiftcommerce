<template>
  <div>
    <label for="sortby" class="text-gray-800">Ordenar por: </label>
    <select @change="emitSort" class="sortby" name="" id="sortby">
      <option value="A-Z" selected>A-Z</option>
      <option value="p-asc">Precio menor</option>
      <option value="p-desc">Precio mayor</option>
      <option value="latest">Más nuevo</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Sortby',
  methods: {
    emitSort($event, value) {
      this.$emit('sortBy', $event.target.value)
    },
  },
}
</script>

<style scoped>
.sortby {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  background-repeat: no-repeat;
  background-color: #fff;
  border-color: #e2e8f0;
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 0rem 2.5rem 0rem 0rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}
</style>