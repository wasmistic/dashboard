<template>
    <!-- App.vue -->

    <v-app >
        <v-app-bar :elevation="0" class="myappbar" :clipped-left="$vuetify.breakpoint.lgAndUp" app light>
         
            <v-spacer />
            <v-toolbar-title>
                 <!-- {{ $route.meta.title }} -->
            </v-toolbar-title>
            <v-spacer/>
            <!-- <v-btn class="app_button" icon height="40" width="40" >
                <v-icon size="20" color="primary">mdi-magnify</v-icon>
            </v-btn>
            <v-btn class="app_button" icon height="40" width="40" >
                <v-icon size="20" color="primary">mdi-menu</v-icon>
            </v-btn> -->
        </v-app-bar>





        <!-- Sizes your content based upon application components -->
        <v-content  class="content-holder">
              <v-row align-center justify="center" fill-height>
          <!-- <v-col cols="12" class="text-center" > -->
                    <v-img src="@/assets/logo_full.png" max-height="120" max-width="200" alt="AfrealOne" />
                <!-- </v-col> -->
            </v-row>
             <v-progress-linear :active="apiloading" :indeterminate="apiloading" absolute color="primary"> </v-progress-linear>
         
            <div class="offline_div">
                  <v-icon size="150" style="opacity:0.3">mdi-cloud-off-outline</v-icon>
                <div class="text-center">
                  
                 <p>Sorry, looks like you're offline!<br />Please reconnect to continue.</p>
                
                </div>
             
               
           </div>
          
         
               
            
        </v-content>

<!--        <search-bar></search-bar>-->

    </v-app>
</template>
<script>
    import {
        loadingMixin
    } from '../../mixins/Loading'
    import EventBus from '@/Services/Event'
    export default {
        inject:["Bus"],
        mixins: [loadingMixin],
        data() {
            return {
                 isEditing: false
            }
        },
        // beforeMount() {
        //     window.addEventListener("beforeunload", this.preventNav)
        //     this.$once("hook:beforeDestroy", () => {
        //     window.removeEventListener("beforeunload", this.preventNav);
        //     })
        // },

        // beforeRouteLeave(to, from, next) {
        //     if (this.isEditing) {
        //     if (!window.confirm("Leave without saving?")) {
        //         return;
        //     }
        //     }
        //     next();
        // },

        // methods: {
        //     preventNav(event) {
        //     if (!this.isEditing) return
        //     event.preventDefault()
        //     event.returnValue = ""
        //     },
        // },
    }
</script>
<style>
    .offline_div{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        position:relative;
        height:100%;
        
    }
    .close_drawer_btn{
        /* top:-90px; */
        border-radius:50%;
        /*border:1px solid #000;*/
        left:5px;
        /*margin-top:10px;*/
    }
    .content-holder {
        background-color: #fff;
        
    }
    .sidebar-avatar-title-div{
        margin:0 15px;
        padding:0;

    }

    .app_button{
        /*width: 37.69px;*/
        /*height: 36.57px;*/
        margin:0 10px;
        background-color: rgba(0, 117, 242, 0.05);
        color:#0077F3;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        border-radius: 100px;
    }
    .v-content__wrap{
        padding-bottom: 40px;
    }

    .user_mail{
        color:#fff !important;
    }

/*    Theme Style*/
    .v-application .elevation-1 {
        -webkit-box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02) !important;
        box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02)!important;
        /*box-shadow:  0 12px 23px rgba(0, 0, 0, 0.05)!important;*/
    }
    .myappbar{
        /*box-shadow: 0px 22px 23px rgba(0, 0, 0, 0.05);*/
        /*-webkit-box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02) !important;*/
        /*box-shadow:  0 12px 14px rgba(0, 0, 0, 0.02)!important;*/
    }
    .v-list {
        padding:0 0 !important;
    }
    .list_title{
        font-size: 18px !important;
        line-height: 18px !important;
    }
    .list_subtitle{
        font-size: 12px !important;
    }
    .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
        margin-right: 10px !important;
    }
    .v-list-item {
        padding:0 10px !important;
    }
    .theme--light.v-btn {
         color: #0077F3 !important;
    }
    .mytheme_title_color{
        color:#2B2B2B;
    }
    .mytheme_subtitle_color{
        color: rgba(0, 0, 0, 0.47);
    }
    .mytheme_btn_background{
        /*background-color: rgba(0, 117, 242, 0.05);*/
        background-color: rgba(0, 119, 243, 0.05);
    }
    .mytheme_btn_text_color{
        color:#0077F3;
        /*font-style: bold;*/
    }
    .owner_div{
        position: relative;
        width: 224px;
        height: 33px;
        /*left: 31px;*/
        margin:5px auto;
        bottom: 0;
        /*top: 764px;*/
    }
    .owner_div .first{
        color: #379392;
        font-size: 10px;
        line-height: 13px;
    }
    .owner_div .second{
        font-size: 10px;
        line-height: 13px;
        color:rgba(0, 0, 0, 0.47);
    }

    .sub-head{
        margin:-10px 0px;
        font-size:13px;
        color: #2B2B2B !important;
    }

</style>