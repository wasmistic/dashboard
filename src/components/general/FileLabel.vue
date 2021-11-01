<template>
    <div>
           <v-row justify="center" no-gutters>
                    <v-col class="col-12" md="2">
                        <h4>{{title}}</h4>
                    </v-col>
                    <v-col class="col-12 " md="8">
                      <div class="btnbox">
                            <div class="box">
                            <v-btn depressed color="grey" dark small>
                            Choosen File
                            </v-btn>
                        </div>
                           <v-file-input
                            accept="image/*"
                            outlined
                            dense
                        >
                        
                        </v-file-input>
                      </div>
                         
                    </v-col>
                </v-row>
    </div>
</template>
<script>
export default {
    name:'File Labe',
    props:{
        title:{
            type:String,
        },
    }
}
</script>
<style scoped>
.btnbox{
    position: relative;
}
.box{
    width: 130px;
    height: 30px;
    cursor: pointer;
   position: absolute;
   left:3rem;
   top: 0.30rem;
   display: flex;
   align-items: center;
   justify-content: center;
}

</style>