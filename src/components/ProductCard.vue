<script lang="ts">
    import type { PropType } from 'vue';
    import type { Product } from '@/model/types';
    import { useCartStore } from '@/stores/cart';

    export default {
        props:{
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        methods: {
            buttonClick() {
                const cartStore = useCartStore();
                cartStore.addProduct(this.product);
            }
        },
        computed: {
            productImageUrl(){
                return this.product.image ?? 'https://cdn.vuetifyjs.com/images/cards/docks.jpg';
            }
        }
    }
</script>

<template>
    <v-card>
        <v-img 
            aspect-ratio="" 
            cover
            height="250"
            class="align-end text-white"
            :src="productImageUrl">
        </v-img>
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-text>
            <p class="mb-4">
                Esta es una descripción de ejemplo
            </p>
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="buttonClick" color="orange-lighten-2">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>