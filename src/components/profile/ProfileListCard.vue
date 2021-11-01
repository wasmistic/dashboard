<template>
    <div >
<!--        <v-divider></v-divider>-->
        <v-container class="rm-container">
            <v-list two-line subheader>
                <v-list-item>
                    <v-list-item-avatar class="avatar" @click="goToUserProfile()" >
                        <div class="profile_img" :style="{ backgroundImage: 'url(' + data.photo + ')' }">
                            <v-icon size="25" :color="isActive?'secondary': 'info'" class="status-icon">mdi-circle-medium</v-icon>
                        </div>
<!--                        <img src="https://randomuser.me/api/portraits/women/81.jpg" />-->
<!--                        <p>G</p>-->
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title" @click="goToUserProfile()">{{title | shortNameBy25}}</v-list-item-title>
                        <v-list-item-subtitle class="subtitle">{{data.job}}</v-list-item-subtitle>
                        <v-list-item-subtitle class="location-subtitle" v-if="show_subtitle">{{data.city}} {{data.state?data.state.name:''}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon :class="isActive?'mytheme_active_btn_background':'mytheme_inactive_btn_background'" @click="goToUserProfile()">
                            <v-icon size="25" :color="isActive?'primary':'grey'">{{icon}}</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-container>
        <v-divider></v-divider>
    </div>
</template>

<script>
    import {loadingMixin} from "../../mixins/Loading";

    export default {
        name: "ProfileListCard",
        mixins:[loadingMixin],
        props:{
            data:{required:true
            },
            show_subtitle:{type:Boolean},
            icon:{type:String},
            forFriend:{type:Boolean}
        },
        data() {
            return {
                // isActive:true,
                test_img: "https://randomuser.me/api/portraits/women/81.jpg"
            }
        },
        computed: {
            isActive(){
                let id = this.data.id;
                if(this.forFriend){
                    id = this.data.friend_id;
                }
                return this.checkIfUserIsAFriend(id);
            },
            title() {
                if(this.data.firstname !== undefined){
                    return this.data.firstname +" "+this.data.lastname;
                }
                return 'Agent Info Not Available'
                
            }
        },
        methods: {
            goToUserProfile() {

                this.$router.push({name:"connect_profile",params:{slug:this.data.slug}});
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .rm-container{
        padding:0 10px 0 10px;
    }
    .title{
        font-size: 15px !important;
        font-style: normal;
        font-family: "Circular Std" !important;
        line-height: 16px !important;
    }
    .subtitle{
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
        line-height: 13px;
        color:rgba(0,0,0,0.47) !important;
    }
    .location-subtitle{
        font-weight: normal;
        font-size: 8px;
        line-height: 10px;
        padding-top:10px;
        color:rgba(0,0,0,0.47) !important;
    }
    .avatar{
        width:57px !important;
        height: 57px !important;
        min-width: 57px !important;
    }
    .v-avatar{
        border-radius: 0 !important;
    }
    .profile_img{
        width:57px;
        height: 57px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-blend-mode: normal;
        background-repeat: no-repeat;

    }
    .status-icon{
        position: relative;
        top:-20px;
        right:-20px;
        /*z-index:2000;*/
    }
    .mytheme_active_btn_background{
        /*background-color: rgba(0, 117, 242, 0.05);*/
        background-color: rgba(0, 119, 243, 0.05);
    }
    .mytheme_inactive_btn_background{
        /*background-color: rgba(0, 117, 242, 0.05);*/
        background-color: #F8F8F8;
    }
</style>