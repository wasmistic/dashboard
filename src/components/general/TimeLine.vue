<template>
            <div>
                 <v-timeline
                align-top
                dense
                class="py-0"
                >
                <v-timeline-item
                    :color="color"
                    small
                >
                    <h5>{{punch}}</h5>
                    <small>{{time}}</small>
                </v-timeline-item>
            </v-timeline>
         </div>
</template>
<script>
export default {
    name:"TimeLine",
    props:{
        color:{
            type:String, default:"orange"
        },
        punch:{
            type:String,
        },
        time:{
            type:String,
        }
    },
}
</script>
<style scoped>
small{
    color: rgba(148, 147, 147, 0.432);
    font-weight: bolder;
}
</style>