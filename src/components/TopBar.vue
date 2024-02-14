<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    export default {
        computed: {
            itemsCount(){
                const cartStore = useCartStore();
                return cartStore.cartItemsCount;
            }
        }
    }
</script>

<template>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          size="32">
        <v-img src="/logo.png"></v-img>
        </v-avatar>
        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn :active="$route.name === 'home' || $route.name === 'category'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-home-variant"/>
            <span class="d-none d-sm-flex">Home</span>
          </v-btn>
        </RouterLink>
        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
            <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
              <v-icon class="mr-0 mr-sm-2" icon="mdi-cart"/>
              <span class="d-none d-sm-flex">Cart</span>
            </v-btn>
          </v-badge>
        </RouterLink>
        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
            <v-icon class="mr-0 mr-sm-2" icon="mdi-information"/>
            <span class="d-none d-sm-flex">About</span>
          </v-btn>
        </RouterLink>
        
        <v-spacer class="my-2 d-none d-sm-flex"></v-spacer>       
      </v-container>
    </v-app-bar>
</template>