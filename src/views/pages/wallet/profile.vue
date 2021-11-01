<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import {EventBus} from "@/EventBus"

/**
 * Profile component
 */
export default {
    components: {Layout,PageHeader },
     page: {
    title: "User",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props:['slug'],
    data() {
        return {
            details:'',
            title: "User",
            user:'',
            session:'',
            user_id:'',
            company_id:'',
            transaction_id:'',
            customer_id:'',
            items: [{
                    text: "Contacts",
                },
                {
                    text: "User",
                    active: true,
                },
            ],
            user_details:'',
            activity:'',
            message:''
        };
    },
       async mounted(){
        (
             EventBus.$on("link", data=>{
            //  Headers:Authorization+'Bearer'+localStorage.getItem()
             console.log("i am here",data)
         })
        )
   await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-user-by-user-id",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     "user_id":"1",
    "company_id":"1",
    "user_ses_id":"67931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"2768414848366115605",
    "customer_id":"1"
})})
    .then(response =>  response.json()) 
    .then(data =>{
      this.user_details=data.data
      console.log("user details",this.user_details)
      })
      .catch(err=>{
        console.log(err.message)
      });
       fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-user-activities",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"42768414848360115603",
    "customer_id":"1",
    "limit":"10",
    "offset":"0"
})},)
    .then(response =>  response.json()) 
    .then(data =>{
      this.activity=data.data
      console.log("user activity",this.activity)
      })
      .catch(err=>{
        console.log(err.message)
      });
        fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-messages",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"f2ef07389a092590af14ed02d37df2df",
    "transaction_id":"37776874107070088853",
    "channel":"vhioeg07003l",
    "customer_id":"1",
    "offset": "0"
})},)
    .then(response =>  response.json()) 
    .then(data =>{
      this.message=data.data
      console.log("user message",this.message)
      })
      .catch(err=>{
        console.log(err.message)
      })
       await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-all-users",{
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
    .then(data =>{
        this.user=data.data
        // this.load=false
        console.log("user-output",this.user)
    });
      }
      
    
}
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-4">
        <div class="col-xl-4">
            <div class="card h-100">
                <div class="card-body">
                    <div class="text-center">
                        <b-dropdown class="float-end" variant="white" right menu-class="dropdown-menu-end" toggle-class="font-size-16 text-body p-0">
                            <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                            </template>
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Remove</a>
                        </b-dropdown>
                        <div class="clearfix"></div>
                        <div>
                            <img :src="user_details.profile_image_url" alt class="avatar-lg rounded-circle img-thumbnail" />
                        </div>
                        <h5 class="mt-3 mb-1">{{user_details.fullname}}</h5>
                        <p class="text-muted">{{user_details.ref_code}}</p>

                        <div class="mt-4 w-100">
                            <button type="button"  class="btn btn-outline-primary mr-5 btn-sm">
                                <i class="uil uil-envelope-alt me-2"></i> Send SMS
                            </button>
                             <button type="button" class="btn btn-outline-primary btn-sm">
                                <i class="uil uil-envelope-alt me-2"></i> Send Email
                            </button>
                        </div>
                    </div>

                    <hr class="my-4" />

                    <div class="text-muted">
                        <!-- <h5 class="font-size-16">About</h5>
                        <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p> -->
                        <div class="table-responsive mt-4 mb-0">
                            <div>
                                <p class="mb-1">Name :</p>
                                <h5 class="font-size-16">{{user_details.fullname}}</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">Mobile :</p>
                                <h5 class="font-size-16">{{user_details.phone}}</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">E-mail :</p>
                                <h5 class="font-size-16">{{user_details.email}}</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">User type :</p>
                                <h5 class="font-size-16">{{user_details.member_type}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-8">
            <div class="card mb-0">
                <b-tabs content-class="p-4" justified class="nav-tabs-custom">
                    <b-tab active>
                        <template v-slot:title>
                            <i class="uil uil-user-circle font-size-20"></i>
                            <span class="d-none d-sm-block">Shipment</span>
                        </template>
                        <div>
                            <div>
                                <!-- <h5 class="font-size-16 mb-4">Projects</h5> -->
                                <div class="table-responsive">
                                    <table class="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Projects</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col" style="width: 120px;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">01</th>
                                                <td>
                                                    <a href="#" class="text-dark">Brand Logo Design</a>
                                                </td>
                                                <td>18 Jun, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white" menu-class="dropdown-menu-end">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02</th>
                                                <td>
                                                    <a href="#" class="text-dark">Minible Admin</a>
                                                </td>
                                                <td>06 Jun, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white" menu-class="dropdown-menu-end">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">03</th>
                                                <td>
                                                    <a href="#" class="text-dark">Chat app Design</a>
                                                </td>
                                                <td>28 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white" menu-class="dropdown-menu-end">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">04</th>
                                                <td>
                                                    <a href="#" class="text-dark">Minible Landing</a>
                                                </td>
                                                <td>13 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white" menu-class="dropdown-menu-end">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">05</th>
                                                <td>
                                                    <a href="#" class="text-dark">Authentication Pages</a>
                                                </td>
                                                <td>06 May, 2020</td>
                                                <td>
                                                    <span class="badge bg-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <b-dropdown right toggle-class="text-muted font-size-18 px-2 p-0" variant="white" menu-class="dropdown-menu-end">
                                                        <template v-slot:button-content>
                                                            <i class="uil uil-ellipsis-v"></i>
                                                        </template>

                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </b-dropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-clipboard-notes font-size-20"></i>
                            <span class="d-none d-sm-block">Activities</span>
                        </template>
                         <div>
                                <!-- <h5 class="font-size-16 mb-4">Projects</h5> -->
                                <div class="table-responsive">
                                    <table class="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">State</th>
                                                <th scope="col" style="width: 120px;">Date_created</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in activity" :key="index">
                                                 <td>
                                                   {{index +1}}
                                                </td>
                                                <td>
                                                   {{item.description}}
                                                </td>
                                                 <td>
                                                   {{item.address}}
                                                </td>
                                                 <td>
                                                   {{item.state}}
                                                </td>
                                                  <td>
                                                   {{item.date_created}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-envelope-alt font-size-20"></i>
                            <span class="d-none d-sm-block">Messages</span>
                        </template>
                         <div>
                                <!-- <h5 class="font-size-16 mb-4">Projects</h5> -->
                                <div class="table-responsive">
                                    <table class="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Message</th>
                                                <th scope="col">Sender_type</th>
                                                <th scope="col">Receiver_type</th>
                                                <th scope="col" style="width: 120px;">Date_time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in message" :key="index">
                                                <td>
                                                    {{index+1}}
                                                </td>
                                                 <td>
                                                    {{item.message}}
                                                </td>
                                                  <td>
                                                    {{item.sender_type}}
                                                </td>
                                                 <td>
                                                    {{item.receiver_type}}
                                                </td>
                                                 <td>
                                                    {{item.date_time}}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </b-tab>
                </b-tabs>
                <!-- Nav tabs -->
                <!-- Tab content -->
            </div>
        </div>
    </div>
    <!-- end row -->
</Layout>
</template>
