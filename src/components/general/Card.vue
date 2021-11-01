<template>
            <v-card class="text-center pa-5" >
                <h2 :style="{color:color}">{{title}} </h2>
                <h4>{{subtitle}}</h4>
            </v-card>
           
</template>
<script>
export default {
    name:"Card",
    props:{
        title:{
            type:String,
        },
        subtitle:{
            type:String,
        },
        color:{
            type:String, default:"black"
        }
    }
}
</script>
<style scoped>

</style>