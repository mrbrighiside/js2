const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        searchLine: '',
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        toggle: false,
        cart: [],
        productId: 0,
        // isVisibleCart: 'invisible'
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let checkId = this.cart.find(productId => productId.id_product === product.id_product)
            if (checkId != undefined) {
                product.quantity++;
            } else {
                this.$set(product, 'quantity', 1)
                this.cart.push(product)
            }
        },
        deleteProduct(product) {
            let checkId = this.cart.find(productId => productId.id_product === product.id_product)
            if (checkId != undefined) {
                product.quantity--;
            } else {
                this.$set(product, 'quantity', 1)
                this.cart.push(product)
            }
        },

    },
    computed: {
        FilterGoods() {
            return this.products.filter(product => {
                return product.product_name.toLowerCase().includes(this.searchLine.toLowerCase())
            })
        }
    },
    beforeCreate() {
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    beforeMount() {
    },
    mounted(){
    //   this.getJson(`${API + this.catalogUrl}`)
    //     .then(data => {
    //       for(let el of data){
    //         this.products.push(el);
    //       }
    //     });
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
});
