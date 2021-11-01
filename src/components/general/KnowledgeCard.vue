<template>
    <div>
        <v-card width="350px" class="pa-5">
            <div class="font-weight-bold mb-4">
               <v-icon color="orange" class="mr-3" >mdi-folder</v-icon> {{title}}<span>{{span}}</span>
            </div>
             <p class="font-weight-medium p">
                  <v-icon  small class="mr-3">mdi-file</v-icon>{{subtitle}}
            </p>
             <p class="font-weight-medium p">
                  <v-icon  small class="mr-3">mdi-file</v-icon>{{subtitle}}
            </p>
             <p class="font-weight-medium p">
                  <v-icon  small class="mr-3">mdi-file</v-icon>{{subtitle}}
            </p>
             <p class="font-weight-medium p">
                  <v-icon  small class="mr-3">mdi-file</v-icon>{{subtitle}}
            </p>
             <p class="font-weight-medium p">
                  <v-icon  small class="mr-3">mdi-file</v-icon>{{subtitle}}
            </p>
                <!-- <v-card-subtitle class="font-weight-bold">
                     <v-icon  small class="mr-3">mdi-file</v-icon>Sed ut perspiciatis unde omnis?<br>
                     <v-icon  small class="mr-3">mdi-file</v-icon>Sed ut perspiciatis unde omnis?<br>
                     <v-icon  small class="mr-3">mdi-file</v-icon>Sed ut perspiciatis unde omnis?<br>
                     <v-icon  small class="mr-3">mdi-file</v-icon>Sed ut perspiciatis unde omnis?<br>
                     <v-icon  small class="mr-3">mdi-file</v-icon>Sed ut perspiciatis unde omnis?
                </v-card-subtitle> -->
                
        </v-card>
    </div>
</template>
<script>
export default {
    name:'KnowledgeCard',
    props:{
        title:{
            type:String,
        },
        span:{
            type:String,default:'11',
        },
        subtitle:{
            type:String,default:'Sed ut perspiciatis unde omnis?'
        }
    }
}
</script>
<style scoped>
span{
    color: orange;
    margin-left: 0.45rem;
}
.p:hover{
     color: orange;
}
</style>