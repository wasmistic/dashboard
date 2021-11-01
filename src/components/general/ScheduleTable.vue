<template>
    <div>
           <div class="tablebox" >
                 <v-row justify="space-between" no-gutters>
                        <v-col cols="12" md="4" xl="12">
                        <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            outlined
                            hide-details
                            dense

                        ></v-text-field>
                    </v-card-title>
                    </v-col>
                 </v-row>
          <v-divider></v-divider>
            <v-data-table 
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-0"
             >
               <template slot="item.no" slot-scope="{props}">
                 <!-- {{props.index+1}} -->
               </template>
             <template v-slot:item.actions="{ item }">
                  <v-icon
                  small
                  class="mr-2"
                  @click="edit_function"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="del_function"
                >
                  mdi-delete
                </v-icon>
            </template>
            <template v-slot:item.lead="{ item }">
                    <div class="cardbox">
                    <v-list-item >
                    <v-avatar size="30" class="mr-4">
                        <img alt="user" src="@/assets/images/person.jpg">
                    </v-avatar>
                    <v-list-item-content>
                    <v-list-item-subtitle ><strong>John Doe</strong> </v-list-item-subtitle>
                      <v-list-item-subtitle>Web Designer</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    </div>
            </template>
             <template v-slot:item.text="{ item }">
                        <div class="flex" @click="text_function">
                            <v-card-subtitle>
                                <h5>6:30 am - 9:30 pm ( 14 hrs 15 mins)</h5>
                                 <h5>Web Designer - SMARTHER</h5>
                            </v-card-subtitle>
                        </div>
            </template>
             <template v-slot:item.button="{ item }">
                 <div class="borderbox">
                       <v-btn depressed dark outlined @click="btn_function"> <v-icon color="grey">mdi-plus</v-icon> </v-btn>
                 </div>
            </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
export default {
  components: {},
  props:{
      text_function:{
          type:Function,
      },
      btn_function:{
          type:Function,
      },
      edit_function:{
        type:Function,require:"true"
      },
      del_function:{
        type:Function, require:'true'
      }
  },
       data: () => ({
         search:'',
                 items: ['Pending', 'Approved',],
      headers: [
         {
          text: 'S/n',
          align: 'start',
          sortable: false,
          value: "num",
          class:'blue lighten-5'
        },
        {
          text: 'Scheduled Shift',
          value: 'lead',
          class:'blue lighten-5'
        },
        { text: 'Fri 21', value: 'text',class:'blue lighten-5' },
        { text: 'Sat 22', value:'button', class:'blue lighten-5' },
        { text: 'Sun 23', value: 'button', class:'blue lighten-5' },
        { text: 'Mon 24', value: 'button',class:'blue lighten-5' },
        { text: 'Tue 25', value:'text', class:'blue lighten-5' },
        { text: 'Wed 26', value: 'button', class:'blue lighten-5' },
        { text: 'Thu 27', value: 'button',class:'blue lighten-5'},
        { text: 'Fri 28', value: 'button', class:'blue lighten-5' },
        { text: 'Sat 29', value: 'text', class:'blue lighten-5' },
        { text: 'Action', value: 'actions', sortable: false, class:'blue lighten-5' },

      ],
            }),

              created () {
      this.initialize()
    },
        computed:{
        filterEmployees(){
      
        return this.cards.filter((item)=>item.subtitle.match(this.search))
        }
    },
    methods: {
      initialize () {
        this.desserts = [
          {
            num:"1",
            lead: " ",
            text:'',
            button:'',
            action:''
          },
          {
            num:"2",
             lead: " ",
            text:'',
            button:'',
            action:''
          },
          {
           num:"3",
            lead: " ",
            text:'',
            button:'',
            action:''
          },
           {
           num:"4",
            lead: " ",
            text:'',
            button:'',
            action:''
          },
        ]
      },
    },
  
    }
</script>
<style scoped>
.cardbox{
    width:100%;
}
.flex{
    width:250px;
    margin:1rem;
    border: 3px dashed rgba(121, 231, 121, 0.658);
    border-radius: 5px;
}
.borderbox{
    width:70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dotted grey;
    border-radius: 4px;
    margin:0.75rem;
}
h5{
    color: grey;
}
</style>