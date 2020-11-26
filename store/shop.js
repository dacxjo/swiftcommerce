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
    if (state.cart.some(it => it.data.id === item.data.id)) {
      const it = state.cart.find(x => x.data.id === item.data.id)
      it.quantity++
    } else {
      state.cart.push(item)
    }
  },
  removeOneUnit (state, item) {
    if (state.cart.some(it => it.data.id === item.data.id)) {
      const it = state.cart.find(x => x.data.id === item.data.id)
      it.quantity--
      if (it.quantity < 1) {
        mutations.removeFromCart(state, item)
      }
    }
  },
  removeFromCart (state, item) {
    state.cart = state.cart.filter(i => i.data.id !== item.data.id)
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
    let quantity = 0
    state.cart.forEach((item) => {
      quantity += item.quantity
    })

    return quantity
  },
  getCartItems (state) {
    return state.cart
  },
  getToggleCartList (state) {
    return state.toggleCartList
  },
  getCartItemQuantity: state => (item) => {
    if (state.cart.some(it => it.data.id === item.data.id)) {
      const it = state.cart.find(x => x.data.id === item.data.id)
      return it.quantity
    }
  }
}
