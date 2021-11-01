<template>
    <div>
         <div class="progress">
            <div class="top">
                <p>{{day}}</p> <span class="span"> {{hours}} / {{min}}hrs</span>
            </div>
            <v-progress-linear height="3px" :value="value" :color="color"></v-progress-linear>
        </div>
    </div>
</template>
<script>
export default {
    name:"DailyTimeProgressBar",
    props:{
        day:{
            type:String,
        },
        hours:{
            type:String,
        },
        min:{
            type:String,
        },
        value:{
            type:String, default:"35"
        },
        color:{
            type:String, default:"orange"
        }
    }
}
</script>
<style scoped>
.progress{
    border: 1px solid rgba(46, 46, 46, 0.349);
    border-radius: 3px;
    padding: 0.75rem;
    height: 3rem;
    box-sizing: border-box;
    margin-top:-0.95rem;
}
.span{
     color: rgba(32, 25, 25, 0.753);
    font-weight: bolder;
    font-size:0.75rem;
    margin-top:-1rem;
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: -0.35rem;
}
.v-progress-linear{
    margin-top:-0.65rem;
}

</style>