<template>
    <div>
        <label >{{label}}</label>
        <input :type="type" :value="value" class="form-control" @input="$emit('input',$event.target.value)">
           <!-- <v-text-field outlined
                    :label="label"
                    :type="type"
                    :value="value"
                    @input="$emit('input',$event.target.value)" 
                    :rules="rule"           
                  /> -->
    </div>
</template>
<script>
export default {
    name:"BaseInput",
    props:{
        label:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true,
            validate:(value)=>{
                return ['text','email','password'].includes(value);
            }
        },
        value:{
            type:String,
            required:true
        },
        rule:{
            type:Array
        }
    }
}
</script>
<style scoped>
    .form-control{
        width:100%;
        border: 1px solid #f2f2f2;
        padding:10px;
        height: 50px;
        
    }
</style>