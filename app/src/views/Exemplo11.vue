<template>
    <div>
        <h3> Usando vuetify... </h3>

    </div>
</template>

<style scoped>

</style>

<script>
    export default{
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

