<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
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
                        <h5 class="mt-3 mb-1">{{user_details.full_name}}</h5>
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
                                <h5 class="font-size-16">{{user_details.name}}</h5>
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
                                <h5 class="font-size-16">{{user_details.employee_type}}</h5>
                                <h5 class="font-size-16">{{user_details.status}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-8">
            <div class="card mb-0">
                <b-tabs content-class="p-4" justified class="nav-tabs-custom">
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
                </b-tabs>
                <!-- Nav tabs -->
                <!-- Tab content -->
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
   props:['slug'],
    data() {
        return {
            details:'',
            title: "Profile",
            user:'',
            session:'',
            user_id:'',
            company_id:'',
            transaction_id:'',
            customer_id:'',
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "Profile",
                    active: true,
                },
            ],
            user_details:'',
            activity:'',
            message:''
        };
    },
       async mounted(){

   await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-employee-by-employee-id",{
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"42768414848360115603",
    "employee_id":"1"
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

<style lang="scss" scoped>

</style>