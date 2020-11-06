export const state = () => ({
  allProducts: [],
  products: [],
  categories: [],
  cart: [],
  toggleCartList: false
})

export const mutations = {
  setAllProducts (state, allProducts) {
    state.allProducts = allProducts
  },
  setProducts (state, products) {
    state.products = products
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  addToCart (state, item) {
    state.cart.push(item)
  },
  removeFromCart (state, item) {
    state.cart = state.cart.filter(i => i.name !== item.name)
  },
  toggleCartList (state) {
    state.toggleCartList = !state.toggleCartList
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  },
  getProductsLength (state) {
    return state.products.length
  },
  getAllProductsLength (state) {
    return state.allProducts.length
  },
  getCategories (state) {
    return state.categories
  },
  getCategoriesLength (state) {
    return state.categories.length
  },
  getNumOfProductsByCat: state => (categorySlug) => {
    let count = 0
    state.allProducts.forEach((p) => {
      if (p.category === categorySlug) {
        count++
      }
    })
    return count
  },
  getNumOfItemsInCart (state) {
    return state.cart.length
  },
  getToggleCartList (state) {
    return state.toggleCartList
  }
}
