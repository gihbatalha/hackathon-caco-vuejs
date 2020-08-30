<template>
    <div>
        <h3>Exibindo os nomes: </h3>
        <span v-for="pessoa in pessoas"> {{pessoa}} </span>

        <h3>Agora em formato de lista: </h3>
        <ul>
            <li v-for="pessoa in pessoas"> {{pessoa}} </li>
        </ul>
    </div>
</template>

<style scoped>
    span{
        color: red;
    }
</style>

<script>
    export default{
        data(){
            return{
                pessoas: ["Gi", "Lucas", "Pedro", "Elisa", "Laura","João"]
            }
        }
    }
</script>

