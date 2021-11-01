<template>
<div>
<drawer>
    <headertitle title="Dashboard" :subtitle="items"/>
  </drawer>
</div>
</template>

<script>
import drawer from "../views/layout/drawer.vue"
import Headertitle from './layout/headertitle.vue'
  export default {
    name: 'Home',

    components: {
      drawer,
        Headertitle
    },
    data(){
      return{
         items: [{
                    text: "Orbeet",
                },
                {
                    text: "All Shipments",
                    active: true,
                },
            ],
      }
    }
  }
</script>
