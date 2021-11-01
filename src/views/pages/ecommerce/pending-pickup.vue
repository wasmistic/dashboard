<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
          <div class="card mt-8">
       <div class="card-body">
            <div class="row mt-8">
         <div style="margin-left:auto;" class="w-25">
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
                dense
            ></v-text-field>
        </div>
        <div class="col-12">
            <!-- Table -->
            <v-divider></v-divider>
            <v-data-table
            :search="search"
            :items="all_shipping"
            :headers="header"
            >
             <template  v-slot:no-data><div class="spinner-border spinner-border-sm text-primary m-5 mt-4 mb-0" role="status" aria-hidden="true">
                    <span class="sr-only">Loading...</span>
                    </div> <p class="ml-8 mt-1">Loading....</p></template>
          <template #item.id="{item}"><router-link class="text-dark" :to="{name:'page', params:{id:item.id}}" > {{item.id}}</router-link> </template>
            <template #item.sender_name="{item}"> <router-link class="text-dark" :to="{name:'profile', params:{slug:item.user_id}}"><div v-if="!item.profile_image_url" class="avatar-xs mr-4 d-block me-2"></div> <img v-if="item.profile_image_url" :src="item.profile_image_url" :alt="item.sender_name" class="avatar-xs rounded-circle mr-4 me-2"> {{item.sender_name}}</router-link></template>
            <template #item.drop_off_location="{item}">{{item.drop_off_location}}</template>
            <template #item.total_amount="{item}"> ₦ {{Number(item.total_amount).toLocaleString()}}</template>
            <template #item.payment_mettod="{item}">{{item.payment_method}}</template>
            <template #item.date="{item}">{{item.formatted_timestamp}}</template>
            </v-data-table>
        </div>
    </div>
       </div>
   </div>
        </drawer>
    </div>
</template>

<script>
import drawer from '../../layout/drawer.vue'
import Headertitle from '../../layout/headertitle.vue'
    export default {
        components: { drawer, Headertitle },
     async created() {
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-shipments",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"20443607150623357783",
    "status":"Pending Acceptance",
    "limit":"10",
    "offset":"0"
})})
    .then(response =>  response.json())
    .then(data =>{
        this.all_shipping=data.data
    });
},
  
    data() {
        return {
            title: "Pending Pickup",
            search:'',
                all_shipping:[],
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "Pending Pickup",
                    active: true,
                },
            ],
        }
    },
    computed: {
        /**
         * Total no. of records
         */
        header(){
            return[
                {text:'Shipping no', value:'id'},
                {text:'Sender Name', value:'sender_name'},
                {text:'Drop Off Location', value:'drop_off_location'},
                {text:'Total Amount', value:'total_amount'},
                {text:'Payment Method', value:'payment_method'},
                {text:'Date', value:'date'},
            ]
        },
    },
    }
</script>

<style lang="scss" scoped>
.v-application a{
    color: #1976d2!important;
}
.v-application a:hover{
    text-decoration:underline!important;
}
</style>