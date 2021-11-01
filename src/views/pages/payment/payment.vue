<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
        <div class="row">
        <div class="col-12">
            <div class="row justify-content-center mt-4">
                    <div class="col-sm-12 col-md-11">
                   
                  <v-data-table
                    :headers="headers"
                    :items="all_shipping"
                    :search="search"
                    sort-by="name"
                    class="elevation-1"
                >
                    <template v-slot:item.balance="{ item }">
                    <v-chip
                        :color="getColor(item.balance)"
                        dark
                        >
                        ₦ {{Number(item.balance).toLocaleString()}}
                    </v-chip>
                    </template>
                     <template v-slot:item.total_fund="{ item }">
                        ₦ {{Number(item.total_fund).toLocaleString()}}
                    </template>
                      <template v-slot:item.amount="{ item }">
                        ₦ {{Number(item.amount_paid).toLocaleString()}}
                    </template>
                     <template v-slot:item.name="{ item }">
                       <router-link :to="{name:'profile', params:{slug:item.user_id}}">{{(item.name)}}</router-link>
                    </template>
                     <template v-slot:item.status="{ item }">
                        <span class="badge font-size-14 rounded-pill" :class="{
                                        'bg-soft-success': item.status =='Paid',
                                        'bg-soft-danger': item.status ==='Unpaid',
                                       }"> {{item.status}}</span>
                        <!-- <v-chip
                        :color="getColor(item.status)"
                        dark
                        small
                        >
                        {{item.status}}
                    </v-chip> -->
                    </template>
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title class="pt-3">
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            outlined
                            dense
                            single-line
                            hide-details
                        ></v-text-field>
                        </v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                    </v-toolbar>
                    </template>
                    <template #item.shipping_id="{ item }">
                   {{item.shipment_id}}
                    </template>
                    <template #item.payment="{ item }">
                   {{item.payment_method}}
                    </template>
                     <template #item.time="{ item }">
                   {{item.formatted_timestamp}}
                    </template>
                     <template #item.id>
                      <!-- {{number+1}} -->
                    </template>
                     <template #item.detail>
                      <router-link to="{name='view-detail'}">View Details</router-link>
                    </template>
                     <template  v-slot:no-data><div class="spinner-border spinner-border-sm text-primary m-5 mt-4 mb-0" role="status" aria-hidden="true">
                    <span class="sr-only">Loading...</span>
            </div> <p class="ml-8 mt-1">Loading....</p></template>
                </v-data-table>
                </div>
                <!-- Search -->
                
                <!-- End search -->
            </div>
            <!-- Table -->
           
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
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-payment-history",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"42768414848360115603",
    "status":"Paid",
    "limit":"10",
    "offset":"0"
})})
    .then(response =>  response.json())
    .then(data =>
    { 
      this.all_shipping=data.data
      console.log("all-shipment",this.all_shipping)
      });
},
   
    data() {
        return {
            title: "PAYMENTS",
                all_shipping:[],
                search:'',
                number:0,
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "payment",
                    active: true,
                },
            ],
            dialog: false,
            dialogDelete: false,
            headers: [
                   {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'id',
                },
                { text: 'AMOUNT', value: 'amount' },
                { text: 'PAYMENT METHOD', value: 'payment' },
                {
                text: 'SHIPMENT ID',
                align: 'start',
                sortable: false,
                value: 'shipping_id',
                },
                { text: 'STATUS', value: 'status' },
                { text: 'TIME', value: 'time' },
                { text: 'Details', value: 'detail' },
                // { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                balance: '',
                total_fund: '',
                total: '',
            },
            defaultItem: {
                name: '',
                balance: '',
                total_fund: '',
                total: '',
            },
        };
    },
    computed: {
        /**
         * Total no. of records
         */
       
        seria(){
        const list = this.all_shipping.length
        let output = list.filter(item=>{
          this.r=item
        })
        return console.log ("item",output)
      },
    },
      watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    mounted() {
        // Set the initial number of items
        this.initialize()
    },
    methods: {
        /**
         * Search the table data with search input
         */
    getColor (balance) {
        if (balance > 25000) return 'green'
        else if (balance > 5000) return 'orange'
        else return 'green'
      },
      initialize () {
        this.desserts = [
          {
            name: 'Sheyi Akingbade',
            balance: '985000',
            total_fund: '100500',
            total: '250000',
            history:'View History'
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
    }
</script>

<style lang="scss" scoped>
.v-application a:hover{
  text-decoration: underline!important;
}
</style>