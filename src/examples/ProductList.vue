<script lang="ts">

    import ProductCard from './ProductCard.vue';
    import type { Product } from './Product';

    export default {
        components: { 
            ProductCard 
        },
        data() {
            return {
                products: <Array<Product>>[
                    { name: "Silla", price: 67, id: 5},
                    { name: "Monitor", price: 450, id:  8},
                    { name: "Miocrófono", price: 555, id:  2}
                ]
            }
        },
        methods:{
            onProductAdded(productId: number){
                console.log('Agregar producto '+ productId);
            }
        }
    }    

</script>

<template>

    <h2>Productos con v-for:</h2>
    <ProductCard v-for="p in products" 
                :product="p"
                @addProduct="onProductAdded(p.id)"/>

</template>

<style scoped>

</style>