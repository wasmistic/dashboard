<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
           <div class="row">
        <div v-if="load" class="col-12">
               <v-divider class="mt-8"></v-divider>
               <div class="card">
                 <div class="card-body">
                   <div class="col-2 offset-10">
                 <router-link to="/adminform">
                  <v-btn
                color="primary"
                dark
                class="mb-2"
                >
                New Admin
                </v-btn>
                </router-link>
               </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone no</th>
                      <th scope="col">Last Action</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td><div class="spinner-border spinner-border-sm text-primary m-5 mt-4 mb-0" role="status" aria-hidden="true">
                      <span class="sr-only">Loading...</span>
                      </div> <p class="ml-8 mt-1">Loading....</p></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                 </div>
               </div>
                <!-- End search -->
            <!-- Table -->
        </div>
        <div v-else class="col-12">
                <!-- <div class="col-sm-12 col-md-11">
                   
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    sort-by="name"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title class="pt-3">
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            outlined
                            dense

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
                        <template v-slot:activator="{  }">
                            <router-link to="/wizard/adminform">
                              <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            >
                            New Admin
                            </v-btn>
                            </router-link>
                        </template>
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
                                    v-model="editedItem.email"
                                    label="Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.number"
                                    label="Phone no"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.address"
                                    label="Address"
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
                       <router-link to="/wizard/editadmin">
                              <v-btn
                            color="primary"
                            dark
                            icon
                            class="mb-2"
                            >
                            <v-icon
                              small
                              color="success"
                              class="mr-2"
                              @click="editItem(item)"
                          >
                              mdi-pencil
                          </v-icon>
                            </v-btn>
                            </router-link>
                    <v-icon
                        small
                        color="error"
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                    </template>
                    <template v-slot:no-data>
                    <v-btn
                        color="primary"
                        @click="initialize"
                    >
                        Reset
                    </v-btn>
                    </template>
                </v-data-table>
                </div> -->
                <!-- Search -->
               <v-divider class="mt-8"></v-divider>
               <div class="card">
                 <div class="card-body">
                   <div class="col-2 offset-10">
                 <router-link to="/adminform">
                  <v-btn
                color="primary"
                dark
                class="mb-2"
                >
                New Admin
                </v-btn>
                </router-link>
               </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone no</th>
                      <th scope="col">Last Action</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in all_shipping" :key="index">
                      <td><router-link  :to="{name:'Profile'}">{{item.name}}</router-link></td>
                      <td>{{item.email}}</td>
                      <td>{{item.phone}}</td>
                      <td>{{item.uuid}}</td>
                      <td ><router-link to="/admin/editadmin">
                              <v-btn
                            color="primary"
                            dark
                            icon
                            class="mb-2"
                            >
                            <v-icon
                              small
                              color="success"
                              class="mr-2"
                              @click="editItem(item)"
                          >
                              mdi-pencil
                          </v-icon>
                            </v-btn>
                            </router-link>
                    <v-icon
                        small
                        color="error"
                        class="trash"
                        @click="deleteItem(index)"
                    >
                        mdi-delete
                    </v-icon></td>
                    </tr>
                  </tbody>
                </table>
                 </div>
               </div>
                <!-- End search -->
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
  fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-all-employees",{
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
    .then(data =>{
      this.all_shipping=data.data
      this.load=false
      console.log("admin",this.all_shipping)
    });
},
 
    data() {
        return {
            title: "Admin",
             search: '',
             load:true,
            all_shipping:[],
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "Admin",
                    active: true,
                },
            ],
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'Email', value: 'email' },
                { text: 'Phone no', value: 'number' },
                { text: 'Address', value: 'address' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                email: '',
                number: '',
                address: '',
            },
            defaultItem: {
                name: '',
                email: '',
                number: '',
                address: '',
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
      initialize () {
        this.desserts = [
          {
            name:this.all_shipping.full_name,
            email: this.all_shipping.email,
            number:this.all_shipping.phone,
            address:this.all_shipping.uuid,
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.all_shipping.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      // deleteItem (item) {
      //   this.editedIndex = this.desserts.indexOf(item)
      //   this.editedItem = Object.assign({}, item)
      //   this.dialogDelete = true
      // },

      deleteItem(all_shipping) {
        this.all_shipping.splice(all_shipping, 1)
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
<style scoped>
a:hover{
  text-decoration: underline!important;
}
.trash{
    margin-top: -0.9rem!important;
}
</style