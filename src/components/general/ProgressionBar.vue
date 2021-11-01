<template>
    <div>
        <div class="pa-3">
           <p class="font-weight-bold mb-0">
            {{title}}
            </p>
            <v-progress-linear height="5px" :value="value" :color="progressColor"></v-progress-linear>
        </div>
    </div>
</template>
<script>
export default {
    name:"Progression Bar",
    props:{
        title:{
            type:String,
        },
        progressColor:{
            type:String, default:"orange",
        },
        value:{
            type:String,default:'73',
        }
    }
}
</script>