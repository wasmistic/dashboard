<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
              <div class="row">
        <div class="col-12">
            <!-- Table -->
             <div class="col-12">
            <!-- Table -->
                 <v-divider class="mt-8"></v-divider>
                   <div class="col-2 offset-10">
                    <router-link to="{name='rider/form'}">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    >
                    CREATE RIDER
                    </v-btn> 
                    </router-link>
               </div>
                <v-data-table
                :items="all_shipping"
                :headers="header"
                >
                <template  v-slot:no-data><div class="spinner-border spinner-border-sm text-primary m-5 mt-4 mb-0" role="status" aria-hidden="true">
                        <span class="sr-only">Loading...</span>
                </div> <p class="ml-8 mt-1">Loading....</p></template>
               <!-- <template #item.avatar="{item}"><div v-if="!item.rider_profile_image_url" class="avatar-xs mr-4 d-block me-2"></div> <img v-if="item.rider_profile_image_url" :src="item.rider_profile_image_url" :alt="item.sender_name" class="avatar-xs rounded-circle mr-4 me-2"> {{item.sender_name}}</template> -->
                <template #item.id="{item}">{{item.id-1}}</template>
                <template #item.phone="{item}">{{item.phone}}</template>
                <template #item.name="{item}"> <router-link class="text-dark"  :to="{name:'Rider Profile'}"><div v-if="!item.rider_profile_image_url" class="avatar-xs mr-4 d-block me-2"></div> <img v-if="item.rider_profile_image_url" :src="item.rider_profile_image_url" :alt="item.sender_name" class="avatar-xs rounded-circle mr-4 me-2"> {{item.sender_name}} {{item.name}}</router-link></template>
                <template #item.status="{item}">
                     <!-- <v-chip
                        :color="getColor(item.status)"
                        dark
                        small
                        >
                        {{item.status}}
                    </v-chip> -->
                     <span class="badge font-size-14 rounded-pill" :class="{
                                        'bg-soft-success': item.status =='active',
                                        'bg-soft-danger': item.status ==='unactive',
                                       }"> {{item.status}}</span>
                </template>
                <template #item.current_address="{item}">{{item.current_address}}</template>
                <template #item.date="{item}">{{item.last_location_timestamp_formatted}}</template>
                </v-data-table>
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
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-all-riders",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"f2ef07389a092590af14ed02d37df2df",
    "transaction_id":"37776874107070088853"
})})
    .then(response =>  response.json())
    .then(data =>{
        this.all_shipping=data.data
        console.log("all-ship",this.all_shipping)
    });
},
    data() {
        return {
            title: "All Riders",
                all_shipping:[],
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "All Riders",
                    active: true,
                },
            ],
           
        };
    },
    computed: {
        /**
         * Total no. of records
         */
          header(){
            return[
                {text:'S/N', value:'id'},
                // {text:'Avatar', value:'avatar'},
                {text:'Name', value:'name'},
                // {text:'Phone no', value:'phone'},
                {text:'Status', value:'status'},
                {text:'Current Address', value:'current_address'},
                {text:'Last Seen', value:'date'},
            ]
        },
        rows() {
            return this.all_shipping.length;
        },
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
         getColor (status) {
       if (status == 'active') return 'green'
        else return 'red'
      },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
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