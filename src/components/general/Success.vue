<template>
  <v-row justify="center">

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Success</v-card-title>

        <v-card-text>
          {{text}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  inject:["Bus"],
    props:["text"],
    data(){
        return{
            dialog:false
        }
    },
    created() {
        this.Bus.$on("show_success",(t)=>{
            this.dialog = t;
        })
    },
}
</script>