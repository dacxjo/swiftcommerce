<template>
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
      <n-link to="/" class="bg-black text-white p-2 mt-4">
        Button text
      </n-link>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeroSection',
  computed: {
    ...mapGetters({
      heroTitle: 'site/getHeroTitle',
      heroDesc: 'site/getHeroDesc',
      heroImage: 'site/getHeroImg'
    })
  }
}
</script>
