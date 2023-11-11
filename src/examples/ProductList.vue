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
                    { name: "Silla", price: 67 },
                    { name: "Monitor", price: 450 },
                    { name: "Miocrófono" }
                ]
            }
        }    
    }    

</script>

<template>

    <h2>Productos con v-for:</h2>
    <ProductCard v-for="p in products" 
                :product="p"/>

</template>

<style scoped>

</style>