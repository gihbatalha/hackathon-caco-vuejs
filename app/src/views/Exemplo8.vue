<template>
    <div>
        <h3> Carrinho da livraria </h3>
        <IncredibleList :nomes="livros"></IncredibleList>
    </div>
</template>

<style scoped>
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
</style>

<script>
    import IncredibleList from '../components/IncredibleList.vue'

    export default{
        components:{
            IncredibleList
        },
        data(){
            return{
                livros:["O capital", "Harry Potter e a câmara secreta"]
            }
        },
        methods:{
        }
    }
</script>

