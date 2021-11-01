<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark">
        <i class="mdi mdi-home-variant h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <router-link to="/" class="mb-5 d-block auth-logo">
                <img
                  src="@/assets/images/orbeet.png"
                  alt
                  height="22"
                  class="logo logo-dark"
                />
                <img
                  src="@/assets/images/orbeet.png"
                  alt
                  height="22"
                  class="logo logo-light"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Register Account</h5>
                  <p class="text-muted">Get your free Orbeet account now.</p>
                </div>
                 <div class="alert alert-success" role="alert" v-if="message">
                  {{message}}
                </div>
                 <div class="alert alert-danger" role="alert" v-if="error">
                  {{error}}
                </div>
                <div class="p-2 mt-4">
                  <form @submit.prevent="register()" method="POST">
                    <div class="mb-3">
                      <label for="username">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        v-model="name"
                        placeholder="Enter name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="useremail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                        v-model="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="userpassword">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        v-model="password"
                        placeholder="Enter password"
                      />
                    </div>

                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="condition"
                        value="true"
                        id="auth-terms-condition-check"
                      />
                      <label
                        class="form-check-label"
                        for="auth-terms-condition-check"
                        >I accept
                        <a href="javascript: void(0);" class="text-dark"
                          >Terms and Conditions</a
                        ></label
                      >
                    </div>

                    <div class="mt-3 text-end">
                      <button
                        class="btn btn-primary w-100 mt-8 text-light waves-effect waves-light"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="text-muted mb-0">
                        Already have an account ?
                        <router-link
                          to="/login"
                          class="fw-medium text-primary"
                          >Login</router-link
                        >
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }}  Orbeet Mobility Limited
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>

    export default {
 
  mounted() {
    document.body.classList.add("authentication-bg");
  },
  data() {
    return {
      title: "Register",
      email:'',
      password:'',
      name:'',
      condition:false,
      message:'',
      error:''
    };
  },
  methods:{
  //   ...mapActions({
  //     REGISTER:'user/REGISTER'
  // }),
  async register(){
   await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/login",{
     method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
           "email":this.email,
            "password":this.password,
            "transaction_id":this.name,
            "confirmed":this.condition,
            "device_name": "device_name",
            "token": "token"
})
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      this.message="Details has been send successfully!"
      this.error='',
      this.$router.push('/verify')
    })
    .catch(error=> {
      this.error=error
      this.message=''
    })
    }
  }
    }
</script>
