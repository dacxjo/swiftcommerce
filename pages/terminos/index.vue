<template>
  <!--TODO: Validate empty settings -->
  <main class="bg-gray-100 ">
    <section
      class="container mx-auto px-5 lg:px-0 pt-24"
    >
    <h1 class="text-left text-5xl">{{terms.terms_title || 'Default Title'}}</h1>
    <hr>
    <div class="py-10" v-html="$md.render(terms.terms_content)"></div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Terms',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  async asyncData({ $content, store }) {
    const terms = await $content('site/terms').fetch()
    return {
      terms,
    }
  },
}
</script>

