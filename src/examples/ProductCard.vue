<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from './Product';

    export default {
        props: {
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        emits:['addProduct'],
        methods:{
            onButtonClick(){
                this.$emit('addProduct')
            }
        }
    }

</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Precio: {{ product.price }}</p>
    <button @click="onButtonClick">
        Agregar al carrito
    </button>
    <hr/>
</template>