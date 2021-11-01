<template>
    <div>
        <drawer>
        <headertitle :title="title" :subtitle="items"/>
           <div class="row">
              
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
            title: "All Notification",
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "All Notification",
                    active: true,
                },
            ],
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>