<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
            <div class="row">
      <div class="col-xl-10">
         <v-item-group
        v-model="window"
        class="text-center"
        mandatory
        tag="v-flex"
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
          class="mb-6"
        >
          <v-btn
            :input-value="active"
            text
            width="50%"
            max-width="100%"
            @click="toggle"
          >
           {{n}}
          </v-btn>
        </v-item>
      </v-item-group>
         <v-window
        v-model="window"
        class="elevation-0 pb-8 mt-8"
      >
        <v-window-item
        >
        <div class="row">
                  <div class="col-12">
                    <div class="form-group row mb-3">
                      <label class="col-md-3 col-form-label" for="name"
                        >Name</label
                      >
                      <div class="col-md-9">
                        <input
                          id="name"
                          type="text"
                          class="form-control"
                          v-model="form.name"
                        />
                      </div>
                    </div>
                    <div class="form-group row mb-3">
                      <label class="col-md-3 col-form-label" for="pwd"
                        >Email</label
                      >
                      <div class="col-md-9">
                        <input
                          id="pwd"
                          type="email"
                          name="email"
                          class="form-control"
                          v-model="form.email"
                        />
                      </div>
                    </div>

                    <div class="form-group row mb-8">
                      <label class="col-md-3 col-form-label" for="confirmpwd"
                        >Phone Number</label
                      >
                      <div class="col-md-9">
                        <input
                          id="confirmpwd"
                          type="tel"
                          class="form-control"
                          v-model="form.number"
                        />
                      </div>
                       <div class="col-md-12">
                          <label class="col-md-3 col-form-label mt-5 mb-5" for="confirmpwd"
                        >Profile Image</label
                      >
                        <!-- file upload -->
                        <!-- <vue-dropzone
                        id="dropzone"
                        ref="myVueDropzone"
                        :use-custom-slot="true"
                        :options="dropzoneOptions"
                        v-model="dropzoneOptions.url"
                        @vdropzone-complete="afterComplete"
                        >
                        <div class="dropzone-custom-content">
                            <i class="display-4 text-muted "></i>
                            <h4>Drop files here or click to upload.</h4>
                        </div>
                        </vue-dropzone> -->
                          <vue-dropzone id='dropzone'
                            ref='myVueDropzone'
                            :options='dropzoneOptions'
                            @vdropzone-complete="afterComplete"
                            @vdropzone-file-added='handleMoreThumbnail'
                            @vdropzone-removed-file='handleMoreThumbnail'>
                             <div class="dropzone-custom-content">
                            <i class="display-4 text-muted "></i>
                            <h4>Drop files here or click to upload.</h4>
                        </div>
                          </vue-dropzone>
                          <div v-if="show" class='more' ref='more'>+</div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                 <v-btn
                  style="background-color: rgb(91, 115, 232); border-color: rgb(91, 115, 232); color:#fff!important;"
                  class="float-right"
                  @click="window++"
                >Next</v-btn>
        </v-window-item>
         <v-window-item
        >
          <div class="alert alert-success text-center" role="alert" v-if="success">
                  {{success}}
            </div>
          <div class="row">
                  <div class="col-12">
                      <div class="d-flex align-items-center justify-content-between flex-wrap">
                          <div>
                               <div class="form-check mb-4">
                                  <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                     v-model="form.create_shipment"
                                    >Create Shipment</b-form-checkbox
                                  >
                                </div>
                            <div class="form-check mb-4">
                                <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                     v-model="form.approve_shipment"
                                    >Approve Shipment</b-form-checkbox
                                  >
                                </div>

                            <div class="form-check mb-4">
                                <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.route_shipment"
                                    >Route Shipment</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                              <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.reroute_shipment"
                                    >Reroute Shipment</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                               <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.cancel_shipment"
                                    >Cancel Shipment</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                               <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                   v-model="form.transfer_shipment"
                                    >Transfer Shipment</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                              <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.reject_shipment"
                                    >Reject Shipment</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                               <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.approve_wallet_topup"
                                    >Approve Wallet Topup</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                               <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.mark_payment_as_paid"
                                    >Mark Payment As Paid</b-form-checkbox
                                  >
                            </div>
                                <div class="form-check mb-4">
                                  <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.mark_payment_as_unpaid"
                                    >Mark Payment As Unpaid</b-form-checkbox
                                  >
                            </div>
                            <div class="form-check mb-4">
                              <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.fund_user_wallet"
                                    >Fund User Wallet</b-form-checkbox
                                  >
                            </div>
                          </div>
                          <div>
                            <div class="form-check mb-4">
                               <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.reply_messages"
                                    >Reply Messages</b-form-checkbox
                                  >
                        </div>
                         <div class="form-check mb-4">
                            <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                     v-model="form.send_push_notifications"
                                    >Send Push Notifications</b-form-checkbox
                                  >
                        </div>
                         <div class="form-check mb-4">
                            <b-form-checkbox
                                    value=1
                                    unchecked-value=0
                                    class="mb-3"
                                    plain
                                    v-model="form.send_email"
                                    >Send Email</b-form-checkbox
                                  >
                        </div>
                         <div class="form-check mb-4">
                           <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                              v-model="form.send_sms"
                            >Send SMS</b-form-checkbox
                          >
                        </div>
                         <div class="form-check mb-4">
                             <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                            v-model="form.create_rider"
                            >Create Rider</b-form-checkbox
                          >
                        </div>
                         <div class="form-check mb-4">
                            <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                           v-model="form.change_rider_details"
                            >Change Rider Details</b-form-checkbox
                          >
                        </div>
                        <div class="form-check mb-4">
                           <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                          v-model="form.deactivate_rider"
                            >Deactivate Rider</b-form-checkbox
                          >
                        </div>
                         <div class="form-check mb-4">
                           <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                           v-model="form.reactivate_rider"
                            >Reactivate Rider</b-form-checkbox
                          >
                        </div>
                         <div class="form-check mb-4">
                             <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                           v-model="form.delete_rider"
                            >Delete Rider</b-form-checkbox
                          >
                        </div>
                         <div class="form-check mb-4">
                            <b-form-checkbox
                            value=1
                            unchecked-value=0
                            class="mb-3"
                            plain
                            v-model="form.change_app_details"
                            >Change App Details</b-form-checkbox
                          >
                        </div>
                        </div>
                      </div>
                  </div>
                  <!-- end col -->
                </div>
           <div class="d-flex align-items-center justify-content-between flex-wrap btn-gp">
      <v-btn
       style="background-color: rgb(91, 115, 232); border-color: rgb(91, 115, 232); color:#fff!important;"
        class="xl-ml-8"
        @click="window--"
      >Previous</v-btn>
       <v-btn
        @click="admin()"
        style="background-color: rgb(91, 115, 232); border-color: rgb(91, 115, 232); color:#fff!important;"
      >Create Admin</v-btn>
    </div>
        </v-window-item>
       
      </v-window>
      </div>
    </div>
        </drawer>
    </div>
</template>

<script>
import drawer from '../../layout/drawer.vue'
import Headertitle from '../../layout/headertitle.vue'
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
    export default {
        components: { drawer, Headertitle,vueDropzone: vue2Dropzone,FormWizard,TabContent  },
  data() {
    return {
      success:'',
      show:false,
      title: "Create Admin",
      length:['Basic','Priviledge'],
      window: 0,
       step:0,
      form:{
        name:'',
        email:'',
        number:'',
        img:[],
        create_shipment:0,
        approve_shipment:0,
        route_shipment:0,
        reroute_shipment:0,
        cancel_shipment:0,
        transfer_shipment:0,
        reject_shipment:0,
        approve_wallet_topup:0,
        mark_payment_as_paid:0,
        mark_payment_as_unpaid:0,
        fund_user_wallet:0,
        reply_messages:0,
        send_push_notifications:0,
        send_email:0,
        send_sms:0,
        create_rider:0,
        change_rider_details:0,
        deactivate_rider:0,
        reactivate_rider:0,
        delete_rider:0,
        change_app_details:0,
      },
      items: [
        {
          text: "Orbeet",
          href: "/",
        },
        {
          text: "Create Admin",
          active: true,
        },
      ],
      dropzoneOptions: {
         url: "https://httpbin.org/post",
          maxFilesize: 2, // MB
          maxFiles: 4,
           // bytes
          acceptedFiles: "image/*",
          thumbnailWidth: 160, // px
          thumbnailHeight: 160,
          addRemoveLinks: true
          
      },
    };
  },
 created(){
    this.$el.removeChild(this.$refs.more)
  },
  methods:{
     handleMoreThumbnail () { 
        let dropzone = this.$refs.myVueDropzone.dropzone
        dropzone.files.length > 0
          ? dropzone.element.appendChild(this.$refs.more)
          : dropzone.element.removeChild(this.$refs.more)
      },
     call(){
      setTimeout(() => {
      this.$router.push('/admin/admin')
    },1000);
   },
    async admin(){
      await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/create-employee",{
      method:"POST",
      body: JSON.stringify(this.form)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data.data)
      this.message="Admin Successfully created"
      this.form.name=''
      this.form.email=''
      this.form.number=''
      this.$refs.myVueDropzone.removeAllFiles();
      this.form.create_shipment=''
      this.form.approve_shipment=''
      this.form.route_shipment=''
      this.form.reroute_shipment=''
      this.form.cancel_shipment=''
      this.form.transfer_shipment=''
      this.form.reject_shipment=''
      this.form.approve_wallet_topup=''
      this.form.mark_payment_as_paid=''
      this.form.mark_payment_as_unpaid=''
      this.form.fund_user_wallet=''
      this.form.reply_messages=''
      this.form.send_push_notifications=''
      this.form.send_email=''
      this.form.send_sms=''
      this.form.create_rider=''
      this.form.change_rider_details=''
      this.form.deactivate_rider=''
      this.form.reactivate_rider=''
      this.form.delete_rider=''
      this.form.change_app_details=''
      this.success="Admin Successfully created"
      this.call()
    })
    .then(err=>{
      console.log(err.message)
    })
    },
     afterComplete(file){
          this.form.img.push(file)
          this.show=true
          console.log("uploaded-file",this.form.img);
    }
  },
    }
</script>

<style lang="scss" scoped>
label{
  text-transform: capitalize!important;
}
.v-item--active{
  background-color: rgb(91, 115, 232)!important;
  border-color: rgb(91, 115, 232)!important;
  color: white!important;
  font-weight: bold;
}
.v-btn--text{
  border: 1px solid  rgb(91, 115, 232)!important;
  border-radius: 0rem!important;
}
.btn-gp{
  width: 95%;
  margin-inline: auto!important;
}
 .more{
    display: inline-block;
    margin: 16px;
    border: 3px dashed lightgray;
    width: 125px;
    height: 125px;
    box-sizing: border-box;
    color: lightgray;
    border-radius: 8px;
    font-size: 60px;
    text-align: center;
    line-height: 125px;
    pointer-events: none;
  }
</style>