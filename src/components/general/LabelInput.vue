<template>
    <div>
        <h4>{{title}}<span class="ml-1"> <v-icon size="8" color="red">mdi-asterisk</v-icon> </span></h4>
                  <v-text-field
                :placeholder= "placeholder"
                outlined
                dense
                class="mt-3"
                v-if="show"
                style="font-weight:bold; color:black;"
              ></v-text-field>
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
    name:"Label & Input Components",
    props:{
        title:{
            type:String,
        },
        placeholder:{
            type:String,
        },
        show:{
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
