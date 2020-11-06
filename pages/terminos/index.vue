<!-- eslint-disable vue/no-v-html */ -->
<template>
  <!--TODO: Validate empty settings -->
  <main class="bg-gray-100 ">
    <section
      class="container mx-auto px-5 lg:px-0 pt-24"
    >
      <h1 class="text-left text-5xl my-10">
        {{ terms.terms_title || 'Default Title' }}
      </h1>
      <hr>
      <div class="py-10" v-html="$md.render(terms.terms_content)" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Terms',
  async asyncData ({ $content, store }) {
    const terms = await $content('site/terms').fetch()
    return {
      terms
    }
  }
}
</script>
