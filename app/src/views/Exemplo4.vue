<template>
    <div>
        <input type="checkbox" id="check" v-model="logado"/>
        <label for="check"> Usuário está logado?</label>
        
        <br>
        
        <span v-if="logado"> Seja bem-vinde Fulano</span>
        <button v-else> Entrar </button>
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
                logado:false
            }
        }
    }
</script>

