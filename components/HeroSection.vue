<template>
  <section
    :style="{ backgroundImage: `url(${heroImage})` }"
    class="index bg-gray-100 flex flex-col justify-center items-center"
  >
    <div
      class="container mx-auto flex flex-col justify-center items-center p-4 lg:p-0"
    >
      <p
        class="text-center text-2xl font-bold relative margot-heading flamenco z-10 block"
      >
        {{ heroDesc }}
      </p>
      <h1 class="font-bold text-5xl lg:text-6xl text-center">
        {{ heroTitle }}
      </h1>
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
