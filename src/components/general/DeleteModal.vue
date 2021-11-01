<template>
    <div>
        <v-row justify-center>
            <v-dialog max-width="400px" v-model="dialog">
            <v-card class="py-4">
                <v-card-title>
                    <h3 class="mx-auto mb-2 mt-0">Are you sure to delete ?</h3>
                    <v-icon class="span" @click="close" size="25">mdi-close-circle</v-icon>
                </v-card-title>
                <v-card-body class="flex">
                    <v-btn @click="close" depressed dark color="orange" rounded width="120px">No</v-btn>
                    <v-btn  depressed dark color="orange" @click="action" outlined rounded width="120px">Yes</v-btn>
                </v-card-body>
            </v-card>
        </v-dialog>
        </v-row>
    </div>
</template>
<script>
import EventBus from '@/Services/Event';
export default {
    name:"DeleteModal",
    props:{
        action:{type:Function},

    },
    data(){
        return{
            dialog:false
        }
    },
    methods:{
        close(){
            this.dialog=false;
        }
    },
    created(){
        EventBus.$on('delete-modal',(t)=>{
            this.dialog=t;
        })
    }
}
</script>
<style scoped>
.flex{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.span{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.v-card{
    position: relative;
}
@media(max-width: 800px){
    .span{
        top: 0.25rem;
        right: 0.25rem;
    }
}
</style>