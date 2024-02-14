<script lang="ts">
    import { useProductsStore } from '@/stores/products';
    import { mapActions,mapState } from 'pinia';

    export default {
        methods: {
            ...mapActions(useProductsStore,[
                'orderByName',
                'orderByNameDesc',
                'orderByPrice',
                'orderByPriceDesc'
            ])
        },
        computed: {
            ...mapState(useProductsStore,['order'])
        }
    }
</script>

<template>
    <v-list-subheader>Ordenar por</v-list-subheader>
    <v-list-item link @click="orderByPrice" :active="order === 'price'">
        <v-list-item-title>
            Económico
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'">
        <v-list-item-title>
            Costoso
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByName" :active="order === 'name'">
        <v-list-item-title>
            Nombre (A-Z)
        </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'">
        <v-list-item-title>
            Nombre (Z-A)
        </v-list-item-title>
    </v-list-item>
</template>