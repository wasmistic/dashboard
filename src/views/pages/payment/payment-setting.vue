<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
           <div class="row">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <div class="mt-4 p-4 border-top">
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    class="mb-3"
                    plain
                    v-model="cash"
                    >Cash</b-form-checkbox
                  >

                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="bank"
                    class="mb-3"
                    plain
                    >Bank Transfer</b-form-checkbox
                  >
                  
                  <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="card"
                    class="mb-3"
                    plain
                    >Card Payment</b-form-checkbox
                  >
                   <b-form-checkbox
                    value=1
                    unchecked-value=0
                    v-model="wallet"
                    class="mb-3"
                    plain
                    >Wallet</b-form-checkbox
                  >
                    <a href="#" @click="payment()" class="btn btn-primary mt-8 text-light mx-auto">
                      <b-spinner v-if="spin" small></b-spinner>  UPDATE PAYMENT SETTINGS
                    </a>
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
      daily:false,
      time:false,
      spin:false,
      cash:0,
      wallet:0,
      bank:0,
      card:0,
      title: "Payment Settings",
      items: [
        {
          text: "Orbeet",
        },
        {
          text: "Payment Settings",
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
    }
</script>

<style lang="scss" scoped>

</style>