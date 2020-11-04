export const state = () => ({
    allProducts:[],
    products: [],
    categories:[]
})

export const mutations = {
    setAllProducts(state, allProducts) {
        state.allProducts = allProducts
    },
    setProducts(state, products) {
        state.products = products
    },
    setCategories(state, categories) {
        state.categories = categories
    },
}

export const getters = {
    getProducts(state) {
       return state.products
    },
    getProductsLength(state){
        return state.products.length
    },
    getAllProductsLength(state){
        return state.allProducts.length
    },
    getCategories(state) {
        return state.categories
     },
     getCategoriesLength(state){
         return state.categories.length
     },
     getNumOfProductsByCat: (state) => categorySlug => {
         let count = 0;
         state.allProducts.forEach(p => {
            if(p.category === categorySlug){
                count++;
            }
         });
         return count;
     }
}
