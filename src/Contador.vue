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
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">
        Aumentar contador
    </button>
    
    <button @click="decrease">
        Disminuir contador
    </button>
</template>

<style scoped>
</style>