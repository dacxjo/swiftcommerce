<template>
  <footer
    class="w-full bg-black h-32 sm:h-auto py-4 flex items-center relative z-30"
  >
    <div class="w-full">
      <div class="container mx-auto h-full w-full">
        <ul
          class="grid grid-cols-1 sm:grid-cols-3 items-center justify-center py-5 sm:py-0 h-full w-full"
        >
          <li class="flex justify-center sm:justify-start">
            <template v-if="siteLogo">
              <img :src="logoIcon" class="w-10 object-cover" alt="">
            </template>
            <template v-else>
              <span class="text-sm text-white">{{
                $store.getters['site/getSiteTitle']
              }}</span>
            </template>
          </li>
          <li class="text-center">
            <n-link class="text-xs text-white" to="/terminos">
              Términos legales
            </n-link>
          </li>
          <li class="text-center sm:text-right">
            <span
              class="text-xs text-white"
            >© {{ new Date().getFullYear() }}
              {{ $store.getters['site/getSiteTitle'] }}</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isCatalog: 'site/isCatalog',
      siteLogo: 'site/getSiteLogo',
      logoIcon: 'site/getLogoIcon'
    })
  }
}
</script>
