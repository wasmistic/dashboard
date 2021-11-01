<template>
    <v-container>
     <v-card elevation="0" class="mt-3 pa-5">
         <div class="cardbox">
            <v-card
                class="mx-auto mr-5 mb-7
                parent pb-5"
                width="350"
                tile
            >
            <div class="head">
                <v-card-title style="color:#fff;font-weight:300;">
                    Pending
                </v-card-title>
            </div>
                <v-card
                class="mx-auto mt-5 pa-4 rounded" max-width="85%"
                 width="300"
                height="165px"
                tile
                >
                    <p class="website"><strong> Website redesign</strong></p>
                <div class="progress">
                    <v-progress-linear value="20" class=" mb-3 mr-3" color="red darken-1"
                    rounded>
                    </v-progress-linear>
                    <p class="percent">70%</p>
                </div>
                <div class="bottom-progress">
                    <small>Sept 26</small>
                    
                    <v-avatar size="30">
                        <img
                            alt="user"
                            src="@/assets/images/hotdeals.png"
                        >
                        <sp>+2</sp>
                        </v-avatar>
                </div>
                    <v-btn
                        text
                        color="warning"
                        small
                        outlined
                        class="mt-2"
                        >
                        Normal
                        </v-btn>
                </v-card>
                <v-card
                 class="mx-auto mt-5 pa-4 rounded"
                width="300"
                max-width="85%"
                height="165px"
                tile
                >
                    <p class="website"><strong> Website redesign</strong></p>
                <div class="progress">
                    <v-progress-linear value="20" class=" mb-3 mr-3" color="red darken-1"
                    rounded>
                    </v-progress-linear>
                    <p class="percent">70%</p>
                </div>
                <div class="bottom-progress">
                    <small>Sept 26</small>
                    
                    <v-avatar size="30">
                        <img
                            alt="user"
                            src="@/assets/images/hotdeals.png"
                        >
                        <sp>+2</sp>
                        </v-avatar>
                </div>
                    <v-btn
                        text
                       color="error"
                        small
                        outlined
                        class="mt-2"
                        >
                        Low
                        </v-btn>
                </v-card>
                <v-card
                 class="mx-auto mt-5 pa-4 rounded"
                width="300"
                max-width="85%"
                height="165px"
                tile
                >
                    <p class="website"><strong> Website redesign</strong></p>
                <div class="progress">
                    <v-progress-linear value="20" class=" mb-3 mr-3" color="red darken-1"
                    rounded>
                    </v-progress-linear>
                    <p class="percent">70%</p>
                </div>
                <div class="bottom-progress">
                    <small>Sept 26</small>
                    
                    <v-avatar size="30">
                        <img
                            alt="user"
                            src="@/assets/images/hotdeals.png"
                        >
                        <sp>+2</sp>
                        </v-avatar>
                </div>
                    <v-btn
                        text
                        color="warning"
                        small
                        outlined
                        class="mt-2"
                        >
                        Normal
                        </v-btn>
                </v-card>
                <div class="text-center mt-5" style="font-weight:600;">
                    Add New Task
                </div>
            </v-card>
             <v-card
        class="mx-auto toquios-parent pb-5 mr-5 mb-7"
        width="350"
        tile
    >
    <div class="head toquios">
        <v-card-title style="color:#fff;font-weight:300;">
            Progress
        </v-card-title>
    </div>
        <v-card
       class="mx-auto mt-5 pa-4 rounded"
        width="300"
        max-width="85%"
        height="165px"
        tile
        >
            <p class="website"><strong> Website redesign</strong></p>
        <div class="progress">
            <v-progress-linear value="20" class=" mb-3 mr-3" color="cyan darken-1"
            rounded>
            </v-progress-linear>
            <p class="percent">70%</p>
        </div>
        <div class="bottom-progress">
            <small>Sept 26</small>
            
            <v-avatar size="30">
                <img
                    alt="user"
                    src="@/assets/images/hotdeals.png"
                >
                <sp>+2</sp>
                </v-avatar>
        </div>
            <v-btn
                text
                color="warning"
                small
                outlined
                class="mt-2"
                >
                High
                </v-btn>
        </v-card>
        <div class="text-center mt-7" style="font-weight:600;">
            Add New Task
        </div>
            </v-card>
             <v-card
        class="mx-auto complete-parent pb-5 mr-5 mb-7"
        width="350"
        tile
    >
    <div class="head complete">
        <v-card-title style="color:#fff;font-weight:300;">
            Completed
        </v-card-title>
    </div>
    <v-card
        class="mx-auto mt-5 pa-4 rounded"
        width="300"
        max-width="85%"
        height="165px"
        tile
        >
            <p class="website"><strong> Website redesign</strong></p>
        <div class="progress">
            <v-progress-linear value="20" class=" mb-3 mr-3" color="teal"
            rounded>
            </v-progress-linear>
            <p class="percent">70%</p>
        </div>
        <div class="bottom-progress">
            <small>Sept 26</small>
            
            <v-avatar size="30">
                <img
                    alt="user"
                    src="@/assets/images/hotdeals.png"
                >
                <sp>+2</sp>
                </v-avatar>
        </div>
            <v-btn
                text
                color="warning"
                small
                outlined
                class="mt-2"
                >
                High
                </v-btn>
        </v-card>
       
        <div class="text-center mt-7" style="font-weight:600;">
            Add New Task
        </div>
            </v-card>
             <v-card
        class="mx-auto inprogress-parent pb-5 mr-5 mb-7"
        width="350"
        tile
    >
    <div class="head inprogress">
        <v-card-title style="color:#fff;font-weight:300;">
            Inprogress
        </v-card-title>
    </div>
        <v-card
         class="mx-auto mt-5 pa-4 rounded"
        width="300"
        max-width="85%"
        height="165px"
        tile
        >
            <p class="website"><strong> Website redesign</strong></p>
        <div class="progress">
            <v-progress-linear value="20" class=" mb-3 mr-3" color="yellow darken-2"
            rounded>
            </v-progress-linear>
            <p class="percent">70%</p>
        </div>
        <div class="bottom-progress">
            <small>Sept 26</small>
            
            <v-avatar size="30">
                <img
                    alt="user"
                    src="@/assets/images/hotdeals.png"
                >
                <sp>+2</sp>
                </v-avatar>
        </div>
            <v-btn
                text
                color="error"
                small
                outlined
                class="mt-2"
                >
                Low
                </v-btn>
        </v-card>
        <div class="text-center mt-7" style="font-weight:600;">
            Add New Task
        </div>
            </v-card>
             <v-card
        class="mx-auto hold-parent pb-5 mr-5 mb-7"
        width="350"
        tile
    >
    <div class="head hold">
        <v-card-title style="color:#fff;font-weight:300;">
            On Hold
        </v-card-title>
    </div>
        <v-card
        class="mx-auto mt-5 pa-4 rounded"
        width="300"
        max-width="85%"
        height="165px"
        tile
        >
            <p class="website"><strong> Website redesign</strong></p>
        <div class="progress">
            <v-progress-linear value="20" class=" mb-3 mr-3" color="indigo"
            rounded>
            </v-progress-linear>
            <p class="percent">70%</p>
        </div>
        <div class="bottom-progress">
            <small>Sept 26</small>
            
            <v-avatar size="30">
                <img
                    alt="user"
                    src="@/assets/images/hotdeals.png"
                >
                <sp>+2</sp>
                </v-avatar>
        </div>
            <v-btn
                text
                color="warning"
                small
                outlined
                class="mt-2"
                >
                High
                </v-btn>
        </v-card>
        <div class="text-center mt-7" style="font-weight:600;">
            Add New Task
        </div>
            </v-card>
             <v-card
        class="mx-auto review-parent pb-5 mb-7"
        width="350"
        tile
    >
    <div class="head review">
        <v-card-title style="color:#fff;font-weight:300;">
            Review
        </v-card-title>
    </div>
        <v-card
         class="mx-auto mt-5 pa-4 rounded"
        width="300"
        max-width="85%"
        height="165px"
        tile
        >
            <p class="website"><strong> Website redesign</strong></p>
        <div class="progress">
            <v-progress-linear value="20" class=" mb-3 mr-3" color="yellow darken-2"
            rounded>
            </v-progress-linear>
            <p class="percent">70%</p>
        </div>
        <div class="bottom-progress">
            <small>Sept 26</small>
            
            <v-avatar size="30">
                <img
                    alt="user"
                    src="@/assets/images/hotdeals.png"
                >
                <sp>+2</sp>
                </v-avatar>
        </div>
            <v-btn
                text
                color="wraning"
                small
                outlined
                class="mt-2"
                >
                High
                </v-btn>
        </v-card>
        <div class="text-center mt-7" style="font-weight:600;">
            Add New Task
        </div>
            </v-card>
         </div>
     </v-card>
    </v-container>
</template>
<script>
export default {
    name:"Progress",
}
</script>
<style scoped>
.progress{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}
.percent{
    color: #000;
    font-weight: bold;
}
.bottom-progress{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -0.75rem;
}
.website{
    margin-bottom: 0rem;
    margin-top: 0.45rem;
}
.head{
    background: rgba(255, 0, 0, 0.692);
    padding: 0.75rem 1.5rem;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:flex-start;
}
.toquios{
    background: rgba(23, 155, 207, 0.623);
}
.toquios-parent{
     background: rgba(185, 215, 224, 0.404);
}
.complete{
    background: rgb(56, 131, 56);
}
.complete-parent{
    background: rgba(122, 165, 122, 0.438);
}
.inprogress{
    background: orange;
}
.inprogress-parent{
     background: rgba(219, 185, 121, 0.363);
}
.hold{
    background: rgba(74, 21, 160, 0.575);
}
.hold-parent{
     background: rgba(171, 161, 187, 0.308);
}
.review{
    background: rgb(211, 155, 50);
}
.review-parent{
    background: rgba(238, 194, 113, 0.384);
}
.parent{
    background:rgba(212, 137, 137, 0.205);
}
.cardbox{
    width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow-x: scroll;
}
@media(max-width:500px){
    .cardbox{
        flex-direction: column;
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
   
}
</style>