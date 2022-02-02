Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        products: products,
    },
    mutations: {
        UPDATE_PRODUCT(state, product) {
            const index = state.products.findIndex(p => p.id === product.id)
            if (index == undefined) return;
            state.products.splice(index, 1, product);
        },

    },
    actions: {
        updateProduct(context, product) {
            context.commit("UPDATE_PRODUCT", product);
        },
    },
    getters: {
    }
})
