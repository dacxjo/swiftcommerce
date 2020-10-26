<template>
  <nav class="w-full fixed top-0 bg-gray-800 h-10 z-50">
    <div class="container mx-auto h-full flex items-center justify-between">
      <ul class="flex h-full items-center">
        <li class="h-full">
          <a
            href="/admin"
            class="px-2 flex items-center h-full text-sm text-white hover:text-gray-900 hover:bg-white"
            >Admin</a
          >
        </li>
        <li class="h-full">
          <a
            href="/admin/#/collections/productos"
            class="px-2 flex items-center h-full text-sm text-white hover:text-gray-900 hover:bg-white"
            >Productos</a
          >
        </li>
        <li class="h-full">
          <a
            href="/admin/#/collections/legal"
            class="px-2 flex items-center h-full text-sm text-white hover:text-gray-900 hover:bg-white"
            >Legal</a
          >
        </li>
        <li class="h-full">
          <a
            href="/admin/#/collections/ajustes"
            class="px-2 flex items-center h-full text-sm text-white hover:text-gray-900 hover:bg-white"
            >Personalizar</a
          >
        </li>
      </ul>
      <ul class="flex h-full items-center">
        <li class="h-full">
          <span class="px-2 flex items-center h-full text-sm text-white"
            >Hola {{ netlifyUser.name }} ^_^</span
          >
        </li>
        <li class="h-full">
          <button
            class="px-2 flex items-center h-full text-sm text-gray-900 bg-white hover:bg-red-500 hover:text-white"
            @click="netlifyLogout"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NetlifyAdminBar',
  methods: {
    netlifyLogout() {
      if (confirm('¿Desea cerrar la sesión?')) {
        localStorage.removeItem('gotrue.user')
        localStorage.removeItem('netlify-cms-user')
        location.reload()
      }
    },
  },
  computed: {
    netlifyUser() {
      return JSON.parse(localStorage.getItem('netlify-cms-user'))
    },
  },
}
</script>