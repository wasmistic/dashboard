<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
          <div class="row justify-content-flex-start">
       <div class="col-lg-10">
            <div class="card">
                <div class="card-body">
                    <div id="addproduct-accordion" class="custom-accordion">
                          <div class="p-4">
                            <form>
                              <div class="row">
                               <h4 class="card-title">Price Settings</h4>
                              <div class="col-lg-12">
                                  <label><h6 class="fw-light font-size-11 text-left d-block text-dark mr-2">Click the below input field for seletion</h6></label>
                                   <i class="fas fa-arrow-alt-circle-down"></i>
                                  <!-- <select class="form-control select2" v-model="value" name="" id="">
                                    <option v-for="(item, index) in option" :key="index">{{item}}</option>
                                  </select> -->
                                  <multiselect v-model="value" :options="option" class="helo"></multiselect>
                              </div>
                              <div class="col-lg-12">
                                <div class="row mt-4" v-if="value.length>0">
                                 <div class="col-lg-6">
                                <div class="mb-3">
                                <label for="productname">Base from</label>
                                <input
                                  id="productname"
                                  name="productname"
                                  type="text"
                                  class="form-control"
                                  value="0"
                                  v-model="base_from"
                                  placeholder="0"
                                  readonly
                                />
                              </div>
                            </div>
                                <div class="col-lg-6">
                                  <div class="mb-3">
                                    <label for="manufacturername">Base To</label>
                                    <input
                                      id="manufacturername"
                                      name="manufacturername"
                                      type="Tel"
                                      class="form-control"
                                      v-model="base_to"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-12">
                                  <div class="mb-3">
                                    <label for="manufacturerbrand"
                                      >Base Price</label
                                    >
                                    <input
                                      id="manufacturerbrand"
                                      name="manufacturerbrand"
                                      type="Tel"
                                      class="form-control"
                                      v-model="base_amount"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-12">
                                  <div class="mb-3">
                                    <label for="price">Additional Price Per km</label>
                                    <input
                                      id="price"
                                      name="price"
                                      type="text"
                                      class="form-control"
                                      v-model="per_km"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-12">
                                    <a href="#" @click="price()" class="btn btn-primary mt-8 text-light w-100">
                                      <i class="uil uil-file-alt me-1"></i> UPDATE PRICE SETTINGS
                                    </a>
                                </div>
                              </div>
                              </div>
                              </div>
                            </form>
                          </div>
                    </div>
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
// import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import Multiselect from "vue-multiselect";
    export default {
        components: { drawer, Headertitle,Multiselect, },
    data() {
    return {
      title: "Price Settings",
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "Price Settings",
          active: true,
        },
      ],
     price_details:'',
     base_from:'',
     base_to:'',
     base_amount:'',
     per_km:'',
     vehicle_type:'',
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
  mounted:{
 
    
  },
 methods:{
  async price(){
        await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/edit-price-settings",{
          method:"POST",
          body:JSON.stringify({
              "base_from":this.base_from,
              "base_to": this.base_to,
              "base_amount":this.base_amount,
              "per_km_amount":this.per_km,
              "vehicle_type":this.value
          })
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data.data)
          this.base_from=''
          this.base_to=''
          this.base_amount=''
          this.per_km=''
          this.value=''
        })
        .catch(err=>{
          console.log(err.message)
        })
        
    }
 },
    }
</script>
