<template>
    <div>
        <label >{{label}}</label>
        <select class="form-control" @change="$emit('input',$event.target.value)">
            <option v-for="p in options" :key="p.value" :value="p.value" :selected="value==p.value">  {{p.label || 'no Label'}} </option>
        </select>
    </div>
</template>
<script>
export default {
    name:"BaseSelect",
    props:{
        label:{
            type:String,
            required:true
        },
        options:{
            type:Array,
            required:true,
            // validator:(value)=>{
            //     return !value.find(v=>typeof opt !== object)
            // }
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