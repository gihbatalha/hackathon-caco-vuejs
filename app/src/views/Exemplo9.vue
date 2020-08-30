<template>
    <div class="content">
        <div>
            <h3>Altere as props</h3>
            <label for="subtitle-input"> Altere o subtitle: </label>
            <input v-model="subtitle" id="subtitle-input"/>

            <br>
            <label for="livro-input"> Adicione novo livro: </label>
            <input v-model="novoLivro" id="livro-input"/>
            <button @click="add()"> OK </button>

            <br>
            <label for="user-input"> Altere o nome do usuário: </label>
            <input v-model="user.name" id="user-input"/>
        </div>

        <br>
        <PropsList 
            :user="user"
            :nomes="livros" 
            title="Seus livros" 
            :subtitle="subtitle"
        ></PropsList>
        
    </div>
</template>
<style scoped>
    .content{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    h3{
        margin:0;
    }
</style>
<script>
    import PropsList from '../components/PropsList.vue'
    export default{
        components:{
            PropsList
        },

        data(){
            return{
                livros:["O capital", "Harry Potter e a câmara secreta"],
                subtitle:"",
                novoLivro:undefined,
                user:{
                    name:"Fulano de tal"
                }
            }
        },
        
        methods:{
            add(){
                if(this.novoLivro !== undefined){
                    this.livros.push(this.novoLivro)
                }
            }
        }
    }
</script>

