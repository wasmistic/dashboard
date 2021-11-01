<template>
    <div>
        <v-skeleton-loader :width="width" :height="height" :loading="true"
                :type="type"
        ></v-skeleton-loader>
    </div>
</template>

<script>
    export default {
        name: "MySkeleton",
        props:{
            type:{required:true,type:String},
            width:{required:true, type:Number,default:100},
            height:{required:true,type:Number,default:100}
        }
    }
</script>

<style scoped>

</style>