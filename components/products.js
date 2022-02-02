Vue.component('products', {
    data: function () {
        return {
            searchTerm: ''
        }
    },

    computed: {
        filteredProducts() {
            return this.searchProduct()
        }

    },
    methods: {
        searchProduct: function () {
            if (this.searchTerm.length <= 0) return store.state.products;

            return products.filter(product => {
                const result = product.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    product.product.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    product.category.toLowerCase().includes(this.searchTerm.toLowerCase());
                console.log(result);
                return result;
            });
        }
    },
    template: `
        <div class="container mt-5" >            
            <div class="row mb-5">
                <div class="col">
                    <h5>Inventory</h5>
                </div>    
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="input-group mb-3">                                    
                        <input type="text" class="form-control" v-model="searchTerm" @change="searchProduct" placeholder="Product search" >                    
                        <span class="input-group-text">
                        <img src="img/search.svg" />                            
                        </span>
                    </div>                    
                </div>    
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Item code</th>
                                <th scope="col">Product <img src="img/unfold.svg" /></th>
                                <th scope="col">Package <img src="img/unfold.svg" /></th>
                                <th scope="col">Available units <img src="img/unfold.svg" /></th>
                                <th scope="col">Category <img src="img/unfold.svg" /></th>
                                <th scope="col">Last updated <img src="img/unfold.svg" /></th>
                                <th scope="col">Edit available quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <product v-for="product in filteredProducts" :key="product.id" :product="product"></product>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `


})