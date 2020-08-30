<template>
    <div>
        <h3> Carrinho da livraria </h3>
        <IncredibleList :nomes="livros" @remove="remove"></IncredibleList>
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
            remove(livro){
                console.log("Removendo o livro:", livro);
                // Realiza uma alteração no banco de dados
                // ou outro comportamento
            }
        }
    }
</script>

