<script lang="ts">

    export default {

        data(){
            return {
                count: 0
            }
        },
        methods: {
            increase(){
                this.count++;
            },
            decrease(){
                this.count--;
            }
        },
        mounted(){
            console.log('El valor inicial de contador es: '+ this.count);
        }
    }    

</script>

<template>

    <p><strong>Objetivo:</strong><br>Tienes que llegar a 20 clicks</p>

    <h1>Contador: {{ count }}</h1>
    <button @click="increase">
        Aumentar contador
    </button>
    <br><br>
    <button @click="decrease">
        Disminuir contador
    </button>

    <p v-if="count <= 10">¡Vamos tú puedes!</p>
    <p v-else-if="count > 10 && count < 20">¡Vamos, te falta muy poco!</p>
    <p v-else-if="count >= 20">¡Lo lograste!</p>

</template>

<style scoped>
</style>