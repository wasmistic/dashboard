<template>
    <div>
            <v-row justify="space-between">
               <v-col class="col-12" md="8">
                   <div class="flex">
                       <h4>{{title}}</h4><small v-if="small">{{span}}</small>
                   </div>
                   
                </v-col>
           </v-row>
    </div>
</template>
<script>
export default {
    name:'Salary Setting Label',
    props:{
        title:{
            type:String,
        },
         span:{
            type:String,
        },
          small:{
            type:Boolean, require:"false"
        },
    }
}
</script>
<style scoped>
small{
    color: rgba(90, 89, 89, 0.658);
    margin-left: 0.45rem;
    font-weight: bold;
}
.flex{
    display: flex;
    align-items: center;
    justify-content:flex-start;
    width: 100%;
}
</style>