<template>
    <div>
        <!-- v-on:click vêm de onclick --> 
        <button v-on:click="buttonClick()"> Clique em mim! </button>
        <span> Clicou qtas vezes? {{count}}</span>

        <!-- Podemos abreviar o v-on: por @ => v-on:click fica @click -->
        <ul>
            <li v-for="nome in nomes" @click="selecionaNome(nome)"> {{nome}} </li>
        </ul>

        <span> Último nome selecionado:  {{nomeSelecionado}}</span>
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
                count: 0,
                nomes:["Giovanna", "Lucas", "Pedro", "Elisa", "Laura","João"],
                nomeSelecionado: undefined
            }
        },

        methods:{
            buttonClick(){
                this.count++;
            },

            selecionaNome(nomeSelecionadoAgora){
                this.nomeSelecionado = nomeSelecionadoAgora;
            }
        }
    }
</script>





