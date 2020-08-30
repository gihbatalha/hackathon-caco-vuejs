<template>
    <div class="content">
        <ul>
            <li v-for="nome in nomes"> 
                {{nome}}  <button @click="remover(nome)"> X </button> 
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .content{
        max-width:300px;
    }
</style>
<script>
    export default{
        name:'List',
        data(){
            return{
                nomes:["Giovanna", "João", "Pedro"]
            }
        },

        methods:{
            remover(nome){
                let indexNome = this.nomes.indexOf(nome);
                this.nomes.splice(indexNome,1);
            }
        }
    }
</script>







