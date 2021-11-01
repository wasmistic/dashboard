<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
           <div class="row">
      <div class="col-lg-10">
        <div id="addproduct-accordion" class="custom-accordion">
          <div class="card">
            <a
              href="javascript: void(0);"
              class="text-dark collapsed"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="addproduct-img-collapse"
              v-b-toggle.accordion-1
            >
              <div class="p-4">
                <div class="media align-items-center">
                  <div class="me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-soft-primary text-primary"
                      >
                        01
                      </div>
                    </div>
                  </div>
                  <div class="media-body overflow-hidden">
                    <h5 class="font-size-16 mb-1">Shipment Type</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              data-parent="#addproduct-accordion"
            >
              <div class="mt-4 p-4 border-top">
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    class="mb-3"
                    plain
                    v-model="local"
                    > Local Shipment</b-form-checkbox
                  >

                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="interstate"
                    class="mb-3"
                    plain
                    >Interstate Shipment</b-form-checkbox
                  >
                  
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="international"
                    class="mb-3"
                    plain
                    >International Shipment</b-form-checkbox
                  >
                    <a href="#" @click="shipment_type()" class="btn btn-primary mt-8 text-light mx-auto">
                       <b-spinner v-if="spin" small></b-spinner> UPDATE SHIPMENT SETTINGS
                    </a>
                </div>
            </b-collapse>
          </div>
          <div class="card">
            <a
              href="javascript: void(0);"
              class="text-dark collapsed"
              v-b-toggle.accordion-2
            >
              <div class="p-4">
                <div class="media align-items-center">
                  <div class="me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-soft-primary text-primary"
                      >
                        02
                      </div>
                    </div>
                  </div>
                  <div class="media-body overflow-hidden">
                    <h5 class="font-size-16 mb-1">Shipment Vehicle</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              data-parent="#addproduct-accordion"
            >
               <div class="mt-4 p-4 border-top">
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    class="mb-3"
                    plain
                    v-model="Motor_park"
                    > Motor Park</b-form-checkbox
                  >

                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="Car"
                    class="mb-3"
                    plain
                    >Car</b-form-checkbox
                  >
                  
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="Minivan"
                    class="mb-3"
                    plain
                    >Minivan</b-form-checkbox
                  >
                    <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="Truck"
                    class="mb-3"
                    plain
                    >Truck</b-form-checkbox
                  >
                    <a href="#" @click="vehicle_type()" class="btn btn-primary mt-8 text-light mx-auto">
                      <b-spinner v-if="spin" small></b-spinner> UPDATE SHIPMENT VEHICLE
                    </a>
                </div>
            </b-collapse>
          </div>
          <div class="card">
            <a
              href="javascript: void(0);"
              class="text-dark collapsed"
              v-b-toggle.accordion-3
            >
              <div class="p-4">
                <div class="media align-items-center">
                  <div class="me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-soft-primary text-primary"
                      >
                        03
                      </div>
                    </div>
                  </div>
                  <div class="media-body overflow-hidden">
                    <h5 class="font-size-16 mb-1">Shipment Time</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              data-parent="#addproduct-accordion"
            >
              <div class="p-4 border-top">
                  <div class="mt-4">
                  <div class="d-flex align-item-center justify-content-between" >
                      <label class="form-check-label fw-bold" for="customSwitchsizelg"
                      >Set Daily Limit <span class="fw-light fst-italic font-size-11 text-left d-block text-dark">Set a daily limit digit for the day</span></label
                    >
                  <div
                    class="form-check form-switch form-switch-lg mb-0"
                    dir="ltr"
                    @click="daily=!daily"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizelg"
                    />
                  </div>
                  </div>
                   <b-form-group
                    id="example-tel"
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label-for="tele"
                    class="mb-3 mt-1"
                    v-if="daily"
                  >
                    <b-form-input
                      id="tele"
                      value="0"
                      type="tel"
                      placeholder="0"
                      name="tel"
                      v-model="limit"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="mt-4">
                  <div class="d-flex align-item-center justify-content-between" >
                      <label class="form-check-label fw-bold" for="customSwitchsizelg"
                      >Set Daily Time  <span class="fw-light fst-italic font-size-11 text-left d-block text-dark">Set a daily time limit for the day</span></label
                    >
                  <div
                    class="form-check form-switch form-switch-lg mb-3"
                    dir="ltr"
                    @click="time=!time"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizelg"
                    />
                  </div>
                  </div>
                    <b-form-group
                    id="example-time"
                    label-cols-sm="12"
                    label-cols-lg="12"
                    label-for="time"
                    class="mb-3 mt-0"
                    v-if="time"
                  >
                    <b-form-input
                      id="time"
                      value="00:00:00"
                      type="time"
                      class="mt-0"
                      placeholder="00:00:00"
                      v-model="hours"
                    ></b-form-input>
                  </b-form-group>
                    <a href="#" @click="shipment_time()" class="btn btn-primary mt-8 text-light mx-auto">
                      <b-spinner v-if="spin" small></b-spinner> UPDATE SHIPMENT TIME
                    </a>
                </div>
              </div>
            </b-collapse>
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
    data() {
    return {
      daily:false,
      time:false,
      spin:false,
      title: "Shipment Settings",
      local:0,
      interstate:0,
      international:0,
      Motor_park:0,
      Minivan:0,
      Car:0,
      Truck:0,
      hours:'',
      limit:'',
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "Shipment Settings",
          active: true,
        },
      ],
    
       value:'',
      option: [
        "Motorbike Pricing",
        "Minivan Pricing",
        "Car Pricing",
        "Truck Pricing",
      ],
      value1: null,
      options: [
        "High Quality",
        "Leather",
        "Notifications",
        "Sizes",
        "Different Color",
      ],
    };
  },
   methods:{
  async shipment_type(){
        this.spin=true
        await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/update-shipment-type",{
          method:"POST",
          body:JSON.stringify({
              "local":this.local,
              "interstate":this.interstate,
              "international":this.international,
          })
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data.data)
          this.local=''
          this.interstate=''
          this.international=''
          this.spin=false
        })
        .catch(err=>{
          console.log(err.message)
          // this.spin=false
        })
        
    },
    async vehicle_type(){
       this.spin=true
        await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/update-shipment-vehicle",{
          method:"POST",
          body:JSON.stringify({
            "motorbike":this.Motor_park,
            "minivan":this.Minivan,
            "car":this.Car,
            "truck":this.Truck
          })
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data.data)
          this.Motor_park=''
          this.Minivan=''
          this.Car=''
          this.Truck=''
          this.spin=false
        })
        .catch(err=>{
          console.log(err.message)
        })
        
    },
      async shipment_time(){
         this.spin=true
        await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/edit-shipment-settings",{
          method:"POST",
          body:JSON.stringify({
             "daily_number_limit":this.limit,
             "daily_time_limit":this.hours
          })
        })
        .then(res=>res.json())
        .then((data)=>{
          console.log(data.data)
          this.limit=''
          this.hours=''
           this.spin=false
        })
        .catch(err=>{
          console.log(err.message)
        })
        
    },
 },
 mounted(){
  
   console.log("click me")

 },
    }
</script>

<style lang="scss" scoped>

</style>