<template>
    <div>
        <v-row justify="space-between">
            <v-list-item-content>
            <!-- <v-list-item-title class="title"> -->
               <h1 style="margin-bottom:-10px" class="ml-5">{{pageTitle}}</h1>
            <!-- </v-list-item-title> -->
            <v-list-item-subtitle> 
                 <bread-crumb/>
            </v-list-item-subtitle>
        </v-list-item-content>
            
         
          <v-btn depressed class="text-center mt-3 button" rounded width="200px" height="45px" color="orange " dark v-if="showButton" 
          @click="btnFunction">
              {{buttonText}}
          </v-btn>
             <v-btn depressed class="text-center mt-3 ml-2 button" rounded width="200px" height="45px" color="orange " dark v-if="showButton_2" 
          @click="btnFunction_2">
              {{buttonText_2}}
          </v-btn>
   </v-row>
    </div>
</template>
<script>
export default {
    props:{
        pageTitle:{type:String, required:true},
        buttonText:{type:String},
        buttonText_2:{type:String},
        btnFunction:{type:Function},
        btnFunction_2:{type:Function},
        showButton:{type:Boolean,default:true},
        showButton_2:{type:Boolean,default:false}
    }
}
</script>
<style scoped>
@media(max-width: 500px){
    .button{
        width: 130px!important;
        font-size: .65rem!important;
        white-space: normal!important;;
    }
}
</style>