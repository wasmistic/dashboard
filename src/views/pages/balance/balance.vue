<template>
    <div>
      <drawer>
          <headertitle :title="title" :subtitle="items"/>
           <div class="row justify-content-between">
      <div
        class="col-xl-4 col-sm-6"
        v-for="(item, index) in shops"
        :key="index"
      >
        <div class="card">
          <div class="card-body">
            <div class="media">
              <!-- <div class="avatar-sm me-4">
                <span
                  :class="`avatar-title bg-soft-${item.color} text-${item.color} font-size-16 rounded-circle`"
                >
                  {{ item.name.charAt(0) }}
                </span>
              </div> -->
              <div class="media-body align-self-center">
                   <div class="row">
                    <div class="col-7">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Your Wallet</p>
                       <p class="text-muted mb-2">
                        {{ item.desc }}
                        </p>
                        <h5 class="font-size-16 mb-2">₦ {{Number(item.money).toLocaleString()}}</h5>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="mt-8">
                        <router-link to="/" class="btn mt-4 btn-outline-primary">
                            <i class="uil-money-stack"></i> Deposit
                        </router-link>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="mt-3">
                       <p class="text-muted mb-1">
                        {{ item.book }}
                        </p>
                        <p class="text-muted mt-1">My Account Details</p>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="mt-3">
                         <router-link to="/" class="btn btn-outline-primary">
                            <i class="uil-money-withdrawal"></i> Withdraw
                        </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="col-xl-8 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="button-items mb-8">
              <b-button variant="outline-warning" class="mx-3"
                >MTN</b-button
              >
              <b-button variant="outline-success" class="mx-3"
                >GLO</b-button
              >
              <b-button variant="outline-danger" class="mx-3">AIRTEL</b-button>
              <b-button variant="outline-success" class="mx-3"
                >9 MOBILE</b-button
              >
              <b-button variant="outline-primary" class="mx-3"
                >IKE</b-button
              >
              <b-button variant="outline-primary" class="mx-3">EKO</b-button>
            </div>
            <v-divider></v-divider>
             <div class="button-items">
              <b-button variant="outline-primary" class="mx-3">SMILE</b-button>
              <b-button variant="outline-primary" class="mx-3">SPECTRANET</b-button>
               <b-button variant="outline-primary" class="mx-3">...</b-button>
              <b-button variant="outline-primary" class="mx-3">...</b-button>
            </div>
           <v-divider></v-divider>
          </div>
        </div>
      </div>
    </div>
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
            <template #item.id="{item}" @click="user(item)"><router-link  class="text-dark" :to="{name:'page', params:{id:item.id}}" > {{item.id}}</router-link> </template>
            <template #item.sender_name="{item}"> <router-link class="text-dark"  :to="{name:'profile', params:{slug:item.user_id}}"><div v-if="!item.profile_image_url" class="avatar-xs mr-4 d-block me-2"></div> <img v-if="item.profile_image_url" :src="item.profile_image_url" :alt="item.sender_name" class="avatar-xs rounded-circle mr-4 me-2"> {{item.sender_name}}</router-link></template>
            <template #item.drop_off_location="{item}">{{item.drop_off_location}}</template>
            <template  #item.total_amount="{item}"> <p @click="user(item)">₦ {{Number(item.total_amount).toLocaleString()}}</p> </template>
            <template #item.payment_mettod="{item}">{{item.payment_method}}</template>
            <template #item.date_time="{item}">{{item.formatted_timestamp}}</template>
            </v-data-table>
        </div>
    </div>
       </div>
   </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-primary"
            ><i
              class="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"
            ></i>
            Load more
          </a>
        </div>
      </div>
    </div>
    <!-- end row -->
      </drawer>
    </div>
</template>

<script>
import drawer from '../../layout/drawer.vue'
import Headertitle from '../../layout/headertitle.vue'
    export default {
        components: { drawer, Headertitle },
           data() {
    return {
      title: "Balance",
      search:'',
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "balance",
          active: true,
        },
      ],
      shops: [
        {
          id: 1,
          name: "Morrie Mages",
          desc: "Available Balance",
          products: "94",
          balance: "9,852",
          color: "primary",
          money:"10000",
          book:"Book Balance"
        },
      ],
    };
  },
    computed:{
        header(){
            return[
                {text:'S/N', value:'no'},
                {text:'Type', value:'type'},
                {text:'Description', value:'descript'},
                {text:'Timestamp', value:'time'},
                {text:'View More', value:'more'},
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