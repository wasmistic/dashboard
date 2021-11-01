<template>
   <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark"
        ><i class="mdi mdi-home-variant h2"></i
      ></router-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div>
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
              <div class="card">
                <div class="card-body p-4">
                  <div class="text-center mt-2">
                    <h5 class="text-primary">Reset OTP</h5>
                    <p class="text-muted">Reset OTP with Orbeet.</p>
                  </div>
                  <div class="p-2 mt-4">
                    <div
                      class="alert alert-success text-center mb-4"
                      role="alert"
                    >
                      Enter your Email an OTP will be sent to you!
                    </div>
                    <form @submit.prevent="verify()">
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

                      <div class="mt-3 text-end">
                        <button
                          class="btn btn-primary w-100 mt-5 text-light waves-effect waves-light"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>

                      <!-- <div class="mt-4 text-center">
                        <p class="mb-0">
                          Remember It ?

                          <router-link
                            to="/auth/verify"
                            class="fw-medium text-primary"
                            >Signin</router-link
                          >
                        </p>
                      </div> -->
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
      title: "Lock screen",
      email:'',
    };
  },
   methods:{
     async verify(){
      await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/request-reset-password-code",{
     method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
            "email": this.email,
})
  })
    .then(response =>  response.json())
    .then(data =>{
      console.log(data.data)
      this.$router.push('/verify')
    })
    .catch(error=> {
      console.log(error)
    })
      }
  }
};
</script>
