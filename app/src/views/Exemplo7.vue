<template>
    <div>
        <h3> Vou usar um componente genérico de lista </h3>
        <List></List>
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
    import List from '../components/List.vue'

    export default{
        components:{
            List
        },
        data(){
            return{
            }
        },
        methods:{
        }
    }
</script>

