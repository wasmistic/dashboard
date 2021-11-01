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
                    sort-by="user_name"
                    class="elevation-1"
                >
                    <template v-slot:item.balance="{ item }">
                       <span class="badge font-size-14 rounded-pill" :class="{
                                        'bg-soft-success': item.account_balance > 100000,
                                        'bg-soft-danger': item.account_balance < 10000,
                                       }"> ₦ {{Number(item.account_balance).toLocaleString()}}</span>
                    <!-- <v-chip
                        :color="getColor(item.account_balance)"
                        dark
                        
                        >
                        ₦ {{Number(item.account_balance).toLocaleString()}}
                    </v-chip> -->
                    </template>
                     <template v-slot:item.total_fund="{ item }">
                        ₦ {{Number(item.total_funded).toLocaleString()}}
                    </template>
                      <template v-slot:item.total="{ item }">
                        ₦ {{Number(item.total_spent).toLocaleString()}}
                    </template>
                     <template v-slot:item.name="{ item }">
                       <router-link :to="{name:'profile', params:{slug:item.user_id}}">{{item.user_name}}</router-link>
                    </template>
                     <template v-slot:item.history="{ item }">
                       <router-link to="{name='History'}">{{item.i}}View History</router-link>
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
                        <v-spacer></v-spacer>
                        <v-dialog
                        v-model="dialog"
                        max-width="500px"
                        >
                        <!-- <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >
                            New Admin
                            </v-btn>
                        </template> -->
                        <v-card>
                            <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.name"
                                    label="Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.balance"
                                    label="Balance"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.total_fund"
                                    label="Total Funded"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.total"
                                    label="Total"
                                    ></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                Cancel
                            </v-btn>
                             <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        color="success"
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        color="error"
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                    <template v-slot:no-data>
                   <div class="spinner-border spinner-border-sm text-primary m-5 mt-4 mb-0" role="status" aria-hidden="true">
                    <span class="sr-only">Loading...</span>
            </div> <p class="ml-8 mt-1">Loading....</p>
                    </template>
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
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-all-users-wallet",{
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
            title: "User Wallet",
            search:"",
                all_shipping:[],
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "user wallet",
                    active: true,
                },
            ],
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                text: 'User',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'Balance', value: 'balance' },
                { text: 'Total Funded', value: 'total_fund' },
                { text: 'Total Spent', value: 'total' },
                { text: 'History', value: 'history' },
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
        formTitle () {
        return this.editedIndex === -1 ? 'New Admin' : 'Edit Admin'
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
       if (balance > 100000) return 'rgba(52, 195, 143, 0.25)'
        else if (balance > 50000) return 'orange'
        else return 'rgba(244, 106, 106, 0.25)'
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
.v-application a{
    color: #1976d2!important;
}
.v-application a:hover{
    text-decoration:underline!important;
}
</style>