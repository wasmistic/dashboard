<template>
    <div>
    <v-row justify="center">
    <v-dialog
      :max-width="width"
      v-model="dialog"
    >
      
      <v-card>
           <h2 class="text-center pa-3">{{title}}</h2>
            <v-icon class="span" @click="close" size="25">mdi-close-circle</v-icon>
        <v-divider></v-divider>
        <v-card-text>
       <slot ></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="text-center">
        <div class="flex">
            <v-btn
            color="orange darken-1"
            dark
            x-large
            width="30%"
            depressed
            rounded
            @click="dialog = false"
            v-show="btn_left"
          >
           {{btn_left_text}}
          </v-btn>
          <v-btn
            color="orange darken-1"
            depressed
            rounded
            dark
            width="30%"
             x-large
             @click="dialog = false"
             v-show="btn_right"
          >
            {{btn_right_text}}
          </v-btn>
        </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
        <!-- <v-dialog max-width="600px">
            <v-btn flat slot="activator" class="success">Open Modal</v-btn>
            <v-card>
                <v-card-title>
                    <h3>Employee</h3>
                </v-card-title>
                <v-card-body></v-card-body>
            </v-card>
        </v-dialog> -->
    </div>
</template>

<script>
import EventBus from '../.././Services/Event'
export default {
    name:'Modal',
    components:{EventBus},
    props:{
      name:{
        type:String
      },
        title:{
            type:String,
        },
        width:{
          type:String, default:"400px"
        },
        btn_title:{
          type:String,
        },
        btn_left:{
            type:Boolean,
        },
        btn_right:{
           type:Boolean
        },
        btn_left_text:{
             type:String,
        },
          btn_right_text:{
            type:String,
        },
    },
    data(){
        return{
          dialog:false,
        }
    },
    created(){
      EventBus.$on(this.name,(t)=>{
        this.dialog = t;
      })
    },
    methods:{
      close(){
        this.dialog=!this.dialog
      }
    }
}
</script>
<style scoped>
.flex{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 1rem auto;
}
.v-card{
  position: relative;
}
.span{
  position: absolute;
  top: 1rem;
  right:1rem;
}
@media(max-width: 800px){
  .span{
   top:0.25rem;
  right:0.25rem;

  }
}
</style>