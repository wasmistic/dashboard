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
                  @click="edit"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="del"
                >
                  mdi-delete
                </v-icon>
            </template>
                 <template v-slot:item.status="{ item }">
                      <v-select
                        :items="items"
                        label="Approved"
                        outlined
                        rounded
                         color="success"
                        dense
                        style="width:100px;"
                      ></v-select>
            </template>
           
            </v-data-table>
        </div>
    </div>
</template>
<script>
export default {
  components: {},
  props:{
    edit:{
      type:Function
    },
    del:{
      type:Function,
    },
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
          text: 'Shift Name',
          value: 'name',
          class:'blue lighten-5'
        },
        { text: 'Min Start Time', value: 'min',class:'blue lighten-5' },
        { text: 'Start Time', value:'start', class:'blue lighten-5' },
        { text: 'Max Start Time', value: 'max', class:'blue lighten-5' },
        { text: 'Min End Time', value: 'min_end',class:'blue lighten-5' },
        { text: 'End Time', value:'end', class:'blue lighten-5' },
        { text: 'Max End Time', value: 'max_end', class:'blue lighten-5' },
        { text: 'Break Time', value: 'break',class:'blue lighten-5'},
        { text: 'Status', value: 'status', class:'blue lighten-5' },
        { text: 'Actions', value: 'actions', sortable: false, class:'blue lighten-5' },
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
      openModal(){
        EventBus.$emit('Schedule',true)
      },
       openShift(){
        EventBus.$emit('shift',true)
      },
      initialize () {
        this.desserts = [
          {
            num:"1",
            name: "10'o clock Shift",
            min: '09:00:00 am',
            start: '10:00:00 am',
            max: '10:30:00 am',
            min_end: '06:00:00 pm',
            end:"06:30:00 pm",
            max_end:'07:00:00 pm',
            break:"30 mins",
            status:" ",
            action: 0,
          },
          {
            num:"2",
            name: "10:30 shift",
            min: '10:00:00 am',
            start: '10:30:00 am',
            max: '11:00:00 am',
            min_end: '06:30:00 pm',
            end:"07:00:00 pm",
            max_end:'07:30:00 pm',
            break:"45 mins",
            status:" ",
            action: 0,
          },
          {
           num:"3",
            name: "Daily Rout",
            min: '06:00:00 am',
            start: '06:30:00 am',
            max: '07:00:00 am',
            min_end: '03:00:00 pm',
            end:"03:30:00 pm",
            max_end:'04:00:00 pm',
            break:"60 mins",
            status:" ",
            action: 0,
          },
        ]
      },
    },
    }
</script>