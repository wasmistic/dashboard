<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
         <div class="row justify-content-flex-start">
       <div class="col-lg-6">
             <div class="card">
          <div class="card-body">
                    <div class="row">
                       <div class="col-md-12">
                        <b-form-group
                          label="Current Password"
                          label-for="password-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="password-input"
                            type="password"
                            v-model="current"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-12">
                        <b-form-group
                          label="New Password"
                          label-for="password-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="password-input"
                            v-model="new_pwd"
                            type="password"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-12">
                        <b-form-group
                          label="Confirm Password"
                          label-for="formrow-password-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-password-input"
                            type="password"
                            v-model="confirm"
                          ></b-form-input>
                        </b-form-group>
                        <div v-if="error.length>1" class="alert-danger text-center p-3" role="alert">
                          {{error}}
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <b-button class="w-100 text-light" @click="changepwd()" type="submit" variant="primary"
                        > <b-spinner v-if="spin" small></b-spinner>  UPDATE PASSWORD</b-button
                      >
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
    export default {
        components: { drawer, Headertitle },
    data() {
    return {
      title: "Change Password",
      spin:false,
      new_pwd:'',
      current:'',
      confirm:'',
      password:'',
      error:'',
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "Change Password",
          active: true,
        },
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value",
        },
      },
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
       async changepwd(){
         this.spin=true
         if(this.new_pwd===this.confirm){
          //  this.password.push(this.confirm)
           this.error=''
           await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/change-password",{
          method:"POST",
          body:JSON.stringify({
            "current_password":this.current,
            "new_password":this.confirm
          })
        })
        .then(res=>res.json())
        .then((data)=>{
          console.log(data.data)
          this.current=''
          this.new_pwd=''
          this.confirm=''
           this.spin=false
        })
        .catch(err=>{
          console.log(err.message)
        })
         }
         else{
           this.error="New and Confirm Password didn't match"
         }  
    },
   
  },
  mounted:{
     async pass(){
      
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>