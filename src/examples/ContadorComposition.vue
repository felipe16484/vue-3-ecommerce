<script setup lang="ts">

    import { onMounted, ref } from 'vue'

    const count = ref(0);

    function increase(){
        count.value++;
    }

    onMounted(() => {
        console.log('El valor inicial del contador es: '+count.value);
    });
</script>

<template>
    <h1>Hola soy la verisón con Composition API</h1>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Incrementar contador</button>
</template>

<style></style>
