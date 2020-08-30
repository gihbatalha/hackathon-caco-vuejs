<template>
    <div>
        <input v-model="message"/>
        <span> {{message}} </span>
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
                message:"Olá pessoal"
            }
        }
    }
</script>



   

