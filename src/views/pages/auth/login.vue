<template>
        <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark"
        ><i class="mdi mdi-home-variant h2"></i
      ></router-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <router-link to="/" class="mb-5 d-block auth-logo">
                <img
                  src="@/assets/images/orbeet.png"
                  alt=""
                  height="22"
                  class="logo logo-dark"
                />
                <img
                  src="@/assets/images/orbeet.png"
                  alt=""
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
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p class="text-muted">Sign in to continue to Orbeet.</p>
                </div>
                <div class="alert alert-danger text-center" role="alert" v-if="error">
                  {{error}}
                </div>
                <div class="p-2 mt-4">
                  <form @submit.prevent="login()">
                    <div class="mb-3">
                      <label for="username">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="username"
                        v-model="email"
                        
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/recoverpwd" class="text-muted">
                          Forgot password?</router-link
                        >
                      </div>
                      <label for="userpassword">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        v-model="password"
                        required
                        role="validation"
                        placeholder="Enter password"
                      />
                    </div>

                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="auth-remember-check"
                        v-model="check"
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        >Remember me</label
                      >
                    </div>

                    <div class="mt-3 text-end">
                      <button
                        class="btn btn-primary w-100 text-light mt-5 waves-effect waves-light"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Don't have an account ?
                        <router-link
                          to="/register"
                          class="fw-medium text-primary"
                        >
                          Signup now</router-link
                        >
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }} Orbeet Mobility Limited
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
   created:{
        
  },
  data() {
    return {
      title: "Log in",
        email:'',
        password:'',
        check:'',
        error:''
    };
  },
  methods:{

      async login(){
      await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/login",{
     method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        "email": this.email,
        "password":this.password,
        "transaction_id": "transaction_id",
        "device_id": "device_id",
        "device_name": "device_name",
        "token": "token"
})
  })
    .then(response => response.json())
    .then(data =>{
    //  localStorage.removeItem('user')
      console.log(data)
      if(data.success==true){
      localStorage.setItem('authentication',true)
       this.error=this.message
       this.$router.push('/')
      }
      else(this.error=data.message,
      localStorage.setItem('authentication',false))
    })
    .catch(()=>{
      this.error="Admin does not exist"
    })
     }
  },
    }
</script>
