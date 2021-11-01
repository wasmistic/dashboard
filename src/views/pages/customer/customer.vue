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
                     <template v-slot:id="{ item }">
                        {{item.id}}
                    </template>
                      <template v-slot:item.register="{ item }">
                      {{item.date_time}}
                    </template>
                     <template v-slot:item.name="{ item }">
                       <router-link :to="{name:'profile', params:{slug:item.id}}">{{(item.fullname)}}</router-link>
                    </template>
                     <template v-slot:item.member="{ item }">
                       {{item.member_type}}
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
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-all-users",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
   "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"42768414848360115603",
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
            title: "CUSTOMERS",
                all_shipping:[],
                search:'',
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "customer",
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
                {
                text: 'NAME',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'EMAIL', value: 'email' },
                { text: 'PHONE', value: 'phone' },
                { text: 'MEMBER TYPE', value: 'member' },
                { text: 'REGISTRATION DATE', value: 'register' },
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