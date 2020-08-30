<template>
    <div class="content">
        <span> Seja bem-vinde {{user.name}}</span>
        <h3> {{title}}</h3>
        <h4> {{subtitle}} </h4>
        <ul>
            <li v-for="nome in nomes"> {{nome}} </li>
        </ul>
    </div>
</template>

<style scoped>
    span{
        color:red
    }

    .content{
        max-width:300px;
    }

    h3,h4{
        margin:0;
    }

</style>

<script>
    export default{
        name:'PropsList',
        // Propriedades que esperamos receber
        props:{
            nomes:{
                type:Array,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            subtitle:{
                type:String, 
                required:true
            },
            user:{
                type:Object,
                required:true
            }
        },
        data(){
            return {}
        }
    }
</script>






