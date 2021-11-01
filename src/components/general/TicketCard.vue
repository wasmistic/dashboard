<template>
    <div>
        <v-card width="100%" class="pa-5">
            <div class="content">
            <div class="font-weight-200">
               <strong> {{title}} </strong>
            </div>
            <div class="font-weight-200" :style="{color:color}">
                {{subtitle}}
            </div>
            </div>
             <v-list-item-title class="title font-weight-bold mt-3 mb-3">
              {{progress}}
            </v-list-item-title>
             <v-progress-linear value="70" height="5px" :color="progressColor"></v-progress-linear>
        </v-card>
    </div>
</template>
<script>
export default {
    name:"TicketCard",
    props:{
        title:{
            type:String,
        },
        subtitle:{
            type:String,
        },
        progress:{
            type:String,
        },
        color:{
            type:String,
        },
        progressColor:{
            type:String,default:'orange darken-2'
        }
    }
}
</script>
<style scoped>
.content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
