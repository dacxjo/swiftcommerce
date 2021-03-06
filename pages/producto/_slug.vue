<template>
  <main class="py-0 sm:py-24 md:py-32">
    <section class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
        <img
          class="w-full object-cover h-full border border-gray-300"
          loading="lazy"
          :src="product.image"
          :alt="product.description"
        >
        <div class="px-5 sm:px-0 flex flex-col justify-center">
          <h1 class="text-4xl font-bold text-center lg:text-left">
            {{ product.name }}
          </h1>
          <span class="text-gray-800 font-light text-center lg:text-left">
            <n-link
              :to="`/categoria/${category.slug}`"
              class="text-gray-700 text-sm font-light"
            >{{ category.name }}</n-link></span>
          <span
            class="text-3xl font-bold text-yellow-600 text-center lg:text-left"
          >{{ product.price }} €</span>
          <hr class="my-4 sm:my-10">
          <p class="text-gray-800 text-lg leading-7 text-center lg:text-left">
            {{ product.description }}
          </p>
          <hr class="my-4 sm:my-10">
          <template v-if="isCatalog">
            <div
              class="fixed z-20 sm:relative bottom-0 left-0 w-full bg-white sm:flex text-center justify-center lg:justify-start"
            >
              <a
                :href="`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappText}`"
                class="bg-black w-full flex justify-center items-center h-12 md:block md:w-auto md:leading-none text-white py-4 px-12"
                @click="addToCart"
              >
                Preguntar por este producto
              </a>
            </div>
          </template>
          <template v-else>
            <div
              class="fixed sm:relative bottom-0 left-0 w-full bg-white sm:flex text-center justify-center lg:justify-start"
            >
              <input
                value="1"
                min="1"
                type="number"
                class="w-1/6 mr-10 border border-black focus:outline-none px-4"
              >
              <button class="bg-black text-white py-4 px-12" @click="addToCart">
                Añadir al carrito
              </button>
            </div>
          </template>

          <div class="my-4 sm:my-10 text-center lg:text-left">
            <div class="mt-5">
              <h4 class="font-bold">
                Comparte este producto
              </h4>
              <div class="flex justify-center lg:justify-start mt-5">
                <ShareNetwork
                  class="mr-2"
                  network="telegram"
                  :url="productURL"
                  :title="product.name"
                  :description="product.description"
                >
                  <img
                    class="w-8 mr-2"
                    loading="lazy"
                    src="~/assets/images/telegrama.svg"
                    alt="Telegram"
                  >
                </ShareNetwork>
                <ShareNetwork
                  class="mr-2"
                  network="whatsapp"
                  :url="productURL"
                  :title="product.name"
                  :description="product.description"
                >
                  <img
                    class="w-8 mr-2"
                    loading="lazy"
                    src="~/assets/images/whatsapp.svg"
                    alt="Whatsapp"
                  >
                </ShareNetwork>
                <ShareNetwork
                  class="mr-2"
                  network="twitter"
                  :url="productURL"
                  :title="product.name"
                  :description="product.description"
                  hashtags="tiendaonline,producto,ecommerce"
                >
                  <img
                    class="w-8 mr-2"
                    loading="lazy"
                    src="~/assets/images/twitter.svg"
                    alt="Twitter"
                  >
                </ShareNetwork>
                <ShareNetwork
                  class="mr-2"
                  network="facebook"
                  :url="productURL"
                  :title="product.name"
                  :description="product.description"
                  hashtags="tiendaonline,producto,ecommerce"
                >
                  <img
                    class="w-8 mr-2"
                    loading="lazy"
                    src="~/assets/images/facebook.svg"
                    alt="Facebook"
                  >
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto mt-10 flex flex-col items-center">
      <h2
        class="text-center text-4xl font-bold margot-heading margot-heading-double relative z-10 w-auto"
      >
        Productos relacionados
      </h2>

      <template v-if="relatedProducts.length > 0">
        <div class="px-10 lg:px-0 mt-5">
          <shop-product-list :product-list="relatedProducts" />
        </div>
      </template>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductPage',
  layout: 'single',
  async asyncData ({ $content, store, params }) {
    const product = await $content('productos')
      .where({ slug: params.slug })
      .fetch()
    const relatedProducts = await $content('productos')
      .where({
        category: product[0].category,
        id: {
          $ne: product[0].id
        }
      })
      .fetch()
    const category = await $content('categorias')
      .where({ slug: product[0].category })
      .fetch()
    return {
      product: product[0],
      category: category[0],
      relatedProducts
    }
  },
  head () {
    return {
      title: this.product.name,
      description: this.product.description,
      meta: [
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.product.name
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.product.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.product.image
        },
        {
          hid: 'twitter:image:alt',
          property: 'twitter:image:alt',
          content: this.product.name
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product.name
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.image
        },
        {
          hid: 'og:image:secure_url',
          propproperty: 'og:image:secure_url',
          content: this.product.image
        },
        {
          hid: 'og:image:alt',
          propproperty: 'og:image:alt',
          content: this.product.name
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'og:product'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '/producto/' + this.product.slug
        },
        {
          hid: 'product:price:amount',
          property: 'product:price:amount',
          content: this.product.price.toFixed(2)
        },
        {
          hid: 'product:price:currency',
          property: 'product:price:currency',
          content: this.product.currency || 'NIO'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isCatalog: 'site/isCatalog',
      whatsappPhone: 'site/waNumber'
    }),
    productURL () {
      if (process.client) {
        return (
          window.location.protocol +
          window.location.hostname +
          this.$route.fullPath
        )
      }
      return ''
    },
    whatsappText () {
      return (
        encodeURI('Hola!, quiero información sobre el siguiente producto.\n') +
        encodeURI(this.productURL) +
        '.\n Gracias!!'
      )
    }
  },

  methods: {
    addToCart () {
      this.$nuxt.$emit('adding-to-cart')
      this.$store.commit('shop/addToCart', {
        quantity: 1,
        data: this.product
      })
    }
  }
}
</script>
