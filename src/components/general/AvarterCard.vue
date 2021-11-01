<template>
    <div>
        <v-card class="mb-5 pa-3">
            <div class="box">
                <!-- <div id="img" :style="{backgroundImage=url('@/assets/images/person.jpg')}"></div> -->
                <v-avatar>
                <img
                   :src="require('@/assets/images/' + img )" 
                    alt="Activities Avaters"
                >
                </v-avatar>
            <div>
                <div class="font-weight-normal ml-3">
                  <strong>{{title_1}}</strong> {{span_1}} <strong> {{title_2}} </strong> {{span_2}} <strong> {{title_3}} </strong> {{span_3}} <strong> {{title_4}} </strong> {{span_4}}
                </div>
            </div>
        </div>
        </v-card>
    </div>
</template>
<script>
export default {
    name:"AvarterCard",
    props:{
        img:{
            type:Image, require:'true'
        },
        title_1:{
            type:String,
        },
         title_2:{
            type:String,
        },
         title_3:{
            type:String,
        },
         title_4:{
            type:String,
        },
        span_1:{
            type:String,
        },
         span_2:{
            type:String,
        },
         span_3:{
            type:String,
        },
         span_4:{
            type:String,
        },
    }
}
</script>
<style scoped>
.box{
    display: flex;
    align-items: center;
    justify-content:flex-start;
}
#img{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>