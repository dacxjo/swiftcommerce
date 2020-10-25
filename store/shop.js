export const state = () => ({
    products: [],
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },
}

export const getters = {
    getProducts(state) {
       return state.products
    },
    getProductsLength(state){
        return state.products.length
    },
}
