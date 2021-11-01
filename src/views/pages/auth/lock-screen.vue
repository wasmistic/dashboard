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
                    <h5 class="text-primary">Reset Password</h5>
                  </div>
                  <div class="p-2 mt-4">
                    <div
                      class="alert alert-success text-center mb-4"
                      role="alert"
                    >
                      Enter your Email and instructions will be sent to you!
                    </div>
                    <form @submit.prevent="reset()">
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
                          class="btn btn-primary w-100 text-light mt-5 waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>

                      <div class="mt-4 text-center">
                        <p class="mb-0">
                          Remember It ?

                          <router-link
                            to="/login"
                            class="fw-medium text-primary"
                            >Signin</router-link
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
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>
export default {
  page: {
    title: "Lock screen",
  },
  mounted() {
    document.body.classList.add("authentication-bg");
  },
  data() {
    return {
      title: "Lock screen",
    };
  },
};
</script>
