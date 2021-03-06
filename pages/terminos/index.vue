<!-- eslint-disable vue/no-v-html */ -->
<template>
  <!--TODO: Validate empty settings -->
  <main class="bg-gray-100">
    <section class="flex bg-white w-full items-center justify-center pt-24">
      <h1 class="text-left text-5xl relative z-10 my-10 margot-heading">
        {{ terms.terms_title || 'Default Title' }}
      </h1>
    </section>
    <section class="w-3/4 lg:w-2/4 mx-auto px-5 lg:px-0 terms-content">
      <div class="py-10" v-html="$md.render(terms.terms_content)" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Terms',
  layout: 'single',
  async asyncData ({ $content, store }) {
    const terms = await $content('site/terms').fetch()
    return {
      terms
    }
  }
}
</script>

<style>
.terms-content div h2 {
  @apply text-2xl;
}

.terms-content div h2,
.terms-content div p strong {
  @apply py-4;
  @apply block;
}
</style>
