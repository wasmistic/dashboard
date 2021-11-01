<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
         <div class="row justify-content-center mb-8">
      <div
        class="col-xl-4 col-sm-6"
      >
        <div class="card text-center box"  data-simplebar style="max-height:316px;" v-if="user_details">
          <div class="card-body">
             <h6 class="font-size-14 mb-2 fw-bold text-left">
              <a href="#" class="text-dark">Sender Details</a>
            </h6>
            <div class="d-flex align-items-start flex-column">
            <div class="d-flex align-items-start justify-content-between w-100">
              <div class="mb-4 mr-6">
             <!-- <div v-if="!user_details.profile_image_url" class="avatar-xs bg-light rounded-circle mr-4 d-block me-2"></div> -->
             <img :src='user_details.profile_image_url' :alt="user_details.sender_name" class="avatar-xs rounded-circle mr-4 me-2"> 
            </div>
            <div class="w-75">
            <h5 class="font-size-14 text-dark fw-bold mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.sender_name}}</a>
            </h5>
             <h6 class="font-size-14 mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.sender_phone_no}}</a>
            </h6>
             <h6 class="font-size-14 mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.pick_up_location}}</a>
            </h6>
            <h6 class="font-size-14 mb-1 text-left">
              <a href="#" class="text-dark">{{user_details.date_time}}</a>
            </h6>
            </div>
            </div>
           </div>
            
          </div>
          <!-- <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-user me-1"></i> Profile
            </button>
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-envelope-alt me-1"></i> Message
            </button>
          </div> -->
        </div>
        <div v-else>
         <div class="spinner-border text-primary m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> <p>Loading.... Shipment details</p>
        </div>
      </div>
       <div
        class="col-xl-4 col-sm-6"
      >
        <div class="card text-center box"  data-simplebar style="max-height:316px;" v-if="user_details">
          <div class="card-body">
             <h6 class="font-size-14 mb-0 fw-bold text-left mb-2">
              <a href="#" class="text-dark">Reciever Details</a>
            </h6>
            <div class="clearfix"></div>
            <div class="d-flex align-items-start flex-column">
            <div class="d-flex align-items-start justify-content-between w-100">
              <div class="mb-4 mr-6">
              <img
                :src="`${user_details.profile_image_url}`"
                :alt="`${user_details.recipient_name}`"
                class="avatar-sm rounded-circle img-thumbnail"
              />
            </div>
            <div class="w-75">
            <h5 class="font-size-14 text-dark fw-bold mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.recipient_name}}</a>
            </h5>
             <h6 class="font-size-14 mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.recipient_phone_no}}</a>
            </h6>
             <h6 class="font-size-14 mb-2 text-left">
              <a href="#" class="text-dark">{{user_details.drop_off_location}}</a>
            </h6>
             <h6 class="font-size-14 mb-1 text-left">
              <a href="#" class="text-dark">{{user_details.chosen_date}}</a>
            </h6>
            </div>
            </div>
           </div>
          </div>

          <!-- <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-user me-1"></i> Profile
            </button>
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-envelope-alt me-1"></i> Message
            </button>
          </div> -->
        </div>
        <div v-else>
         <div class="spinner-border text-primary m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> <p>Loading.... Shipment details</p>
        </div>
      </div>
       <div
        class="col-xl-4 col-sm-6"
      >
        <div class="card text-center box"  data-simplebar style="max-height:316px;" v-if="user_details">
          <div class="card-body">
            <h6 class="font-size-14 mb-0 fw-bold text-left mb-2">
              <a href="#" class="text-dark">Package Details</a>
            </h6>
            <div class="d-flex align-items-start justify-content-start flex-column">
            <h5 class="font-size-14 fw-light mb-1 text-left">
              <a href="#" class="text-dark">Amount: <span class="fw-bold text-dark">{{ user_details.total_amount}}</span></a>
            </h5>
             <h6 class="font-size-16 mb-1 fw-light text-left">
              <a href="#" class=" text-dark font-size-14">Item: <span class="fw-bold text-dark">{{ user_details.item_name}}</span></a>
            </h6>
             <h6 class="font-size-16 mb-1 fw-light text-left">
              <a href="#" class=" text-dark font-size-14">Payment method: <span class="fw-bold text-dark">{{ user_details.payment_method}}</span></a>
            </h6>
            <p class=" fw-light font-size-14 text-left mb-1">Rider name: <span class="fw-bold text-dark"> {{ user_details.rider_name}}</span></p>
              <h4 class="fw-light font-size-14 text-left mb-1 ">Vehicle_type: <span class="fw-bold text-dark">{{ user_details.vehicle_type}}</span></h4>
               <p class=" fw-light font-size-14 text-left mb-1">Payment status:  <span class="badge rounded-pill bg-success">{{ user_details.paid_status}}</span></p>
            </div>
          </div>

          <!-- <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-user me-1"></i> Profile
            </button>
            <button type="button" class="btn btn-outline-light text-truncate">
              <i class="uil uil-envelope-alt me-1"></i> Message
            </button>
          </div> -->
        </div>
        <div v-else>
          <div class="spinner-border text-primary m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> <p>Loading.... Shipment details</p>
        </div>
      </div>
    </div>
    <!-- end row -->
  <div class="row justify-content-between mt-8">
    <div class="col-xl-6 md-6">
      <div class="card">
           <div class="card-body p-0">
    <!-- <div>
      <h5>Search and Add Marker</h5>

      <label>
        <gmap-autocomplete style="border:2px solid #5b73e8;height:35px;border-radius:5px;text-align-center;padding-left:1rem;outline:none;color:#5b73e8;" @place_changed="initMarker"></gmap-autocomplete>

        <button class="btn btn-md text-primary fw-bold" @click="addLocationMarker">Add</button>
      </label>
      <br/>
 
    </div>
    <br> -->
    <gmap-map
        :zoom="14"    
        :center="center"
        style="width:100%;  height: 406px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
      </div>
    </div>
    <div class="col-xl-6 md-6">
     <div class="card">
      <div class="card-body">
        <h4 class="card-title mb-4">Shipments Timeline</h4>
        <div class="mt-8"  data-simplebar style="max-height:316px;">
          <ul class="verti-timeline list-unstyled">
            <li class="event-list" v-for="(item, index) in timeline" :key="index">
              <div class="event-date text-primar">{{item.shipment_id}}</div>
              <h6  id="time" class="d-block text-dark text-muted">{{item.timestamp}}</h6>

              <h5>{{item.title}}</h5>
              <p class="text-muted">
                {{item.description}}
              </p>
            </li>
            <!-- <li class="event-list">
              <div class="event-date text-primar">08 May</div>
              <h5>Timeline event Two</h5>
              <p class="text-muted">
                Sed ut perspiciatis unde omnis iste natus error sit illo
                inventore veritatis
              </p>
            </li> -->
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
    <div class="row mt-3">
      <div class="col-xl-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-primary">
            <i
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
  props:['id'],
  data() {
    return {
      title: "Shipment Details",
      shin:[123456],
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "Shipment Details",
          active: true,
        },
      ],
      time:'',
      timeline:[],
       center: { 
        lat: 39.7837304,
        lng: -100.4458825
      },
      output:[],
      all_shipping:[],
      user_details:null,
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
      gridList: [
        {
          profile: require("@/assets/images/users/avatar-2.jpg"),
          name: "Simon Ryles",
          email:"abc@yahoo.com",
          pickup_address:"28 emina crescent toyin street",
          phone_no:"08129319138",
          date:"2/11/2021",
          receiver_name:"Afolabi",
          drop_off_address:"18 ojuolape ayetoro street",
          amount:"25000",
          payment_method:"Wallet",
          payment_status:"Paid",
          rider_name:"Janet",
          deliver_status:"Deliver"

        },
      
      ],
    };
  },
  mounted() {
    this.locateGeoLocation();
      this.time = this.printTimestamp();
  
 fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-shipment-by-shipment-id",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"f2ef07389a092590af14ed02d37df2df",
    "transaction_id":"48752757500516530086",
    "shipment_id":this.$route.params.id
})},)
    .then(response =>  response.json()) 
    .then(data =>{
      this.user_details=data.data
      // console.log("user details",this.user_details)
      })
      .catch(err=>{
        console.log(err.message)
      })

      
  },


async created() {
    fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-shipment-timeline",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "shipment_id":this.$route.params.id,
    "transaction_id":"42768414848360115603",
    "limit":"10",
    "offset":"0"
})})
    .then(response =>  response.json())
    .then(data =>{
      this.timeline=data.data
      console.log("timeline",this.timeline)
    })
    .catch(err=>{
      console.log(err)
    });
     console.log(this.user)
   this.link()
},
 computed:{
      // ...mapGetters(['user'])
 },
  methods: {
      printTimestamp(){
          return new Date().toLocaleTimeString();
          },
    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
  },
    }
</script>

<style lang="scss" scoped>

.verti-timeline{
  padding-left: 100px!important;
}
ul li h6{
  font-size:10px!important;
    /* color: #5b73e8; */
    position: absolute;
    top:32%;
    left: -102px;
}
.last-mt{
  top: 35%;
  color: red!important;
}
.box{
  height: 180px!important;
  max-height:auto!important;
}
.timeline-card{
  height: 406px!important;
  overflow-y: scroll!important;
}
@media(max-width: 500px){
  #time{
  font-size:12px!important;
  top:25%;
}
}
</style>