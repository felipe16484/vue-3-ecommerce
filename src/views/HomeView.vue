<script lang="ts">
  import LeftMenu from '@/components/left/LeftMenu.vue';
  import ProductList from '@/components/ProductList.vue';
  import { useCategoriesStore } from '@/stores/categories';
  import { useProductsStore } from '@/stores/products';

  function updateCategoryFromRouteParams(categoryIdParam: string|string[]){
      const productsStore = useProductsStore();
      const categoryId = Number(categoryIdParam);
      productsStore.selectCategory(categoryId);
  }

  export default{
      components: {
          ProductList,
          LeftMenu,
      },
      beforeRouteEnter(to){
          updateCategoryFromRouteParams(to.params.categoryId);
      },
      beforeRouteUpdate(to){
          updateCategoryFromRouteParams(to.params.categoryId);
      },
      mounted(){
        const productsStore = useProductsStore();
        productsStore.fetchProducts();
        const categoriesStore = useCategoriesStore();
        categoriesStore.fetchCategories();
      }
  }
</script>

<template>

  <v-row>
    <v-col cols="12" sm="2">
      <LeftMenu/>
    </v-col>
    <v-col cols="12" sm="10">
      <ProductList />
    </v-col>
  </v-row>

</template>
