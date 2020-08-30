<template>
    <div>
        <button id="buttonOriginal" disabled> Click </button>
        <br>
        <button :id="id" :disabled="disabled"> {{title}} </button>
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
                title:"Click",
                id: "button1",
                disabled:true
            }
        }
    }
</script>





   

