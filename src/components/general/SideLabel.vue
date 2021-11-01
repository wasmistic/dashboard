<template>
    <div>
            <v-row justify="center" no-gutters>
               <v-col class="col-12" md="3">
                   <h4>{{title}}</h4>
                </v-col>
               <v-col class="col-12" md="9">
                      <v-text-field 
                      outlined 
                      dense
                      :placeholder="placeholder">
                      </v-text-field>
               </v-col>
           </v-row>
    </div>
</template>
<script>
export default {
    name:'Side Label Component',
    props:{
        title:{
            type:String,
        },
        placeholder:{
            type:String,
        }
    }
}
</script>