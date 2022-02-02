Vue.component('product', {
    data: function () {
        return {
            count: 0
        }
    },
    props: ['product'],
    template: `
        <tr>        
            <td>{{product.code}}</td>
            <td ><span class="product">{{product.product}}</span></td>
            <td>{{product.package}}</td>
            <td>{{product.units}}</td>
            <td>{{product.category}}</td>
            <td>{{product.lastUpdated}}</td>
            <td><edit-quantity :product="product"></edit-quantity></td>
        </tr>
    `


})