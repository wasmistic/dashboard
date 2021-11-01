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
                    <h5 class="text-primary">Verification</h5>
                  </div>
                  <div class="p-2 mt-4">
                    <div class="user-thumb text-center mb-4">
                      <h1 class="font-size-20 text-left fw-bold mt-3">Enter your OTP</h1>
                      <p class="text-left">Enter the 6-digit confirmation code send to your email</p>
                    </div>
                    <form @submit.prevent="verify()">
                     <div style="display: flex; flex-direction: row;">
                        <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator="-"
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        @on-change="handleOnChange"
                        @on-complete="handlecomplete"
                        />
                     </div>
                      <div class="mt-3 text-end">
                        <button
                          class="btn text-light w-100 mt-6 btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                         Submit
                        </button>
                      </div>

                      <div class="mt-4 text-center">
                        <p class="mb-0">
                          Didn't receive code ?
                          <router-link
                            to="/resendcode"
                            class="fw-medium text-primary"
                            >Resend Code</router-link
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
   data() {
    return {
      title: "Lock screen",
      first:'',
      second:'',
      third:'',
      forth:'',
      fifth:'',
      sixth:''
    };
  },
  methods:{
      handlecomplete(value) {
      console.log('OTP changed: ', value);
    },
    handleOnChange(value) {
      console.log('OTP changed: ', value);
    },
     async verify(){
       await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/request-reset-password-code",{
          method: "POST",
    // headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
         "email": "sheyi@diamondscripts.com",
           "transaction_id": "transaction_id"
          })
       })
        .then(response =>  response.json())
    .then(data =>{
        console.log(data.data)
        this.$router.push('/')
    })
    .catch(error=> {
      console.log(error)
    })
     }
  }
    }
</script>
<style lang="scss">
  .otp-input {
    width:calc(100%);
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 16px;
    border-radius: 4px;
    outline: none!important;
    color: #5b73e8!important;
    border: 1px solid #5b73e8!important;
    text-align: center;
    &.error {
      border: 1px solid red !important;
    }
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media(max-width: 500px){
      .otp-input {
    margin: 0 5px;
  }
  }
</style>
