import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import component from "./components/component";
import vco from "v-click-outside"
import VueApexCharts from 'vue-apexcharts'
import VueSweetalert2 from 'vue-sweetalert2';
import VueSlideBar from 'vue-slide-bar'
import Vuelidate from 'vuelidate'
// import i18n from './i18n'
// import store from '@/state/store'
// import axios from './axios'
// import store from './vuex'
import OtpInput from "@bachdgvn/vue-otp-input"
Vue.component("v-otp-input", OtpInput);
import App from './App.vue'
// As a plugin
import VueMask from 'v-mask'
Vue.config.productionTip = false

import * as VueGoogleMaps from "vue2-google-maps";
import Lightbox from 'vue-easy-lightbox'
export const EventBus = new Vue();
Vue.use(Lightbox)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA4MJoZ7Lm57JEBCEFQnk2vGNG0YRwouLk",
    libraries: "places"
  },
  installComponents: true
});
Vue.config.productionTip = false
import '@/assets/scss/app.scss'
import vuetify from './plugins/vuetify'

Vue.component('VueSlideBar', VueSlideBar)
Vue.use(BootstrapVue)
Vue.use(vco)
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);

Vue.use(require("vue-chartist"));
Vue.use(VueMask);
new Vue({
  router,
  // store,
  // axios,
  // i18n,
  vuetify,
  data: {
    Bus:new Vue()
  },
  provide: function () {
    return {
       Bus: this.Bus,
      // paystack:paymentInstance,
    }
   
  },
  render: h => h(App)
}).$mount('#app')
