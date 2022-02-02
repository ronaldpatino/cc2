Vue.component('edit-quantity', {
    data() {
        return {
            productUnits: this.product.units
        }
    },
    props: ['product'],
    methods: {

        formatInput: function () {
            let intQtyValue = parseInt(this.productUnits.replace(/\D/g, ''), 10);
            this.productUnits = intQtyValue.toLocaleString();
        },
        updateQuantity: function () {

            if (this.productUnits.length <= 0) {
                this.productUnits = this.product.units;
                return;
            }

            const cloneProduct = { ...this.product };
            cloneProduct.units = this.productUnits;
            store.dispatch('updateProduct', cloneProduct);
        }
    },
    template: `
        <div class="input-group">                                    
            <span class="input-group-text">Qty</span>
            <input type="text" class="form-control" v-model="productUnits" @change="updateQuantity" @keyup="formatInput">                    
        </div>                    
        `
})