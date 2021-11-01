<template>
    <div>
        <h4>{{title}}<span class="ml-1"> <v-icon size="8" color="red">mdi-asterisk</v-icon> </span></h4>
                        <div class="flex">
                        <v-text-field
                        :placeholder= "placeholder"
                        outlined
                        dense
                        :type="type"
                        class="mt-3"
                        v-if="show"
                        style="font-weight:bold; color:black;"
                        ></v-text-field><span class="avater" v-if="span"> <v-avatar> <v-icon size="15" color="black">mdi-clock-outline</v-icon> </v-avatar> </span>
                        </div>
                         <v-select
                        :items="items"
                        outlined
                        dense
                        class="mt-3"
                        v-if="select"
                        ></v-select>
              
    </div>
</template>
<script>
export default {
    name:"LabelIcon",
    props:{
        title:{
            type:String,
        },
           type:{
            type:String,
        },
        placeholder:{
            type:String,
        },
        show:{
            type:Boolean, default:'true',
        },
        span:{
            type:Boolean, default:'true',
        },
        select:{
            type:Boolean, default:"false",
        }
    },
       data: () => ({
                 items: ['USA', 'American',],
    
            }),
}
</script>
<style scoped>
.avater{
    width: 40px;
    height: 40px;
     display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 3px;
    background: rgba(199, 196, 196, 0.397);
    border: 1px solid grey;
    position: absolute;
    top:0.75rem;
    right: 0;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
</style>
