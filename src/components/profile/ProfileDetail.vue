<template>
    <div>
        <v-container class="rm-container">
            <v-list two-line subheader style="padding:10px !important;">
                <v-list-item >
                    <v-list-item-avatar class="avatar" >
                        <div class="profile_img " :style="{ backgroundImage: 'url(' + profile.photo + ')' }" v-if="profile.photo !==''">
                            <v-icon size="25" :color="title==='Obalowu'?'secondary': 'info'" class="status-icon">mdi-circle-medium</v-icon>
                        </div>
                        <div class="profile_img " style="background-color: #9B9B9B" v-if="profile.photo===''">
                            <v-icon size="25" :color="title==='Obalowu'?'secondary': 'info'" class="status-icon">mdi-circle-medium</v-icon>
                        </div>
                        <!--                        <img src="https://randomuser.me/api/portraits/women/81.jpg" />-->
                        <!--                        <p>G</p>-->
                    </v-list-item-avatar>
                    <v-list-item-content >
                        <v-list-item-title class="title"  >{{title}}</v-list-item-title>
                        <v-list-item-subtitle class="subtitle">{{profile.job}}</v-list-item-subtitle>
                        <v-divider style="max-width: 80px;font-weight: normal;border-color:rgba(0, 0, 0, 0.05)"></v-divider>
                        <v-list-item-subtitle class="location-subtitle" >{{profile.city}} {{profile.state?' - '+profile.state.name:''}} {{', '+profile.country}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>
        <v-divider></v-divider>
        <v-subheader class="sub-head" style="height: 70px">

                <div v-if="!isOwner">
                <v-btn class="status-label" @click="isActive?'' :OpenConnectModal()" :class="[isActive?'active-label':'inactive-label']" style="font-size:10px;min-width:100px;"  depressed small text height="35">{{isActive?'Connected':'Connect with '+profile.firstname}}</v-btn>
                </div>
            <v-spacer v-if="!isOwner"></v-spacer>
            <div style="width:30%;display: flex;justify-content: space-between" v-if="!isOwner">
                <v-btn @click="isActive?phoneUser(profile.phone):''" icon :class="[isActive?'active-label':'inactive-label']" class="btn-shadow" width="40" height="40" >
                    <v-icon size="25" color="primary"  :color="isActive?'primary':'#E5E5E5'">mdi-phone-outline</v-icon>
                </v-btn>
                <v-btn @click="isActive?sendMail(profile.email):''" icon :class="[isActive?'active-label':'inactive-label']" class="btn-shadow" width="40" height="40" >
                    <v-icon size="25" color="primary" :color="isActive?'primary':'#E5E5E5'">mdi-chat-outline</v-icon>
                </v-btn>
            </div>


                <v-btn v-if="isOwner" @click="editProfile()" class="mytheme_btn_background mytheme_btn_text_color"   height="40" style="text-transform: capitalize; font-size: 10px;min-width: 100px"  depressed small text >Edit Profile</v-btn>

                <v-spacer v-if="isOwner"></v-spacer>
                <div v-if="isOwner" style="width:30%;display: flex;justify-content: space-between">
                    <div style="width:100px"></div>
                    <v-btn icon  width="40" height="40" @click="editProfile()"> <v-icon color="primary" size="20">mdi-square-edit-outline</v-icon> </v-btn>

                </div>


        </v-subheader>
        <v-divider></v-divider>
        <v-container>
            <v-card s class="mx-auto profile-content"  elevation="0" >
                <v-subheader style="height:30px;color: #2b2b2b; padding:5px">Profile</v-subheader>
                <div style="font-size:10px; color:rgba(0,0,0,0.47);padding-top:5px;" class="" v-html="profile.profile_content"></div>

            </v-card>
        </v-container>
        <v-divider></v-divider>
        <v-container>
            <v-card style="" class="mx-auto "  elevation="0" >
            <v-subheader style="height:30px; color: #2b2b2b; padding:5px">Properties Listed</v-subheader>
                <span v-if="propertyIsEmpty">
                     <property-list-card v-for="(property,index) in properties" :key="index" :property="property" />
                </span>
                <empty-list v-if="!propertyIsEmpty"></empty-list>

            </v-card>
        </v-container>
<!--        connectmodal-->
        <v-row justify="center">
        <v-dialog v-model="connect_modal" persistent max-width="290">
            <v-card>
<!--                <v-card-title class="text-center">-->
                    <div class="text-center" style="padding:10px"> <span style="font-size: 15px">Connect </span></div>


<!--                </v-card-title>-->
                <v-card-text> Would you like to connect with {{profile.firstname}}?</v-card-text>
                <v-card-actions>

                    <v-btn color="green darken-1" text @click="connect_modal = false">No</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text
                           type="submit"
                           :loading="apiloading"
                           :disabled="apiloading"
                           color="green darken-1"
                           @click.prevent="connectWithUser(profile)"
                    >Yes, Connect</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-row>
    </div>
</template>

<script>
    import {loadingMixin} from "../../mixins/Loading";
    import toast from "../../Services/ToastService";

    export default {
        name: "ProfileDetail",
        mixins:[loadingMixin],
        props:{
            profile:{type:Object,required:true},
            isOwner:{type:Boolean,default:false},
            properties:{type:Array}
        },
        data() {
            return {
                connect_modal:false,
                // isActive: true
            }
        },
        computed: {
            isActive(){
                let p =this.checkIfUserIsAFriend(this.profile.id);
                return p;
            },
            propertyIsEmpty(){
              return this.checkArrayLength(this.properties);
            },
            title(){
                return this.profile.firstname+" "+this.profile.lastname;
            },
            user_state(){
                return this.profile.state;
            },

            // emptyProperties(){
            //     if(this.properties)
            //     return this.properties.length === 0;
            // }

        },
        methods: {
            editProfile(){
                this.$router.push({name:'edit_profile'});
            },
            phoneUser(phone){
                window.location='tel:'+phone
            },
            sendMail(email){
                window.location = 'mailto:'+email;
            },
            OpenConnectModal(){
                this.connect_modal = true;
            },
            connectWithUser(friend){
                let user_id = this.$store.state.user_module.user.id;
                let r = {user_id:user_id,friend_id:friend.id}
                this.$store.dispatch("addFriendAction",r).then((res)=>{
                    this.connect_modal = false;
                    toast.success("Connection added Successfully")
                    this.$store.dispatch("allCompareUserList");

                })
                // this.$swal({
                //     title: "Are you sure?",
                //     text: "Connect with "+friend.firstname,
                //     icon: "warning",
                //     buttons: true,
                // }).then((value) => {
                //     if (value) {
                //
                //     } else {
                //     }
                // });
            }
        },
        created() {
            // this.getUserProfile()
        }
    }
</script>

<style scoped>
    .rm-container{
        padding:0 10px 0 10px;
    }
    .title{
        font-size: 16px !important;
        font-style: normal;
        font-family: "Circular Std" !important;
        line-height: 18px !important;
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
        font-size: 10px;
        line-height: 13px;
        padding-top:5px;
        color:rgba(0,0,0,0.47);
    }
    .avatar{
        width:80px !important;
        height: 80px !important;
        min-width: 80px !important;
    }
    .v-avatar{
        border-radius: 0 !important;
    }
    .profile_img{
        width:80px;
        height: 80px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-blend-mode: normal;
        background-repeat: no-repeat;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);

    }
    .status-icon{
        position: relative;
        top:-20px;
        right:-20px;
        /*z-index:2000;*/
    }
    .btn-shadow{
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    }
    .active-label{
        background-color: rgba(0, 119, 243, 0.05);
        color:#0077F3;
    }
    .inactive-label{
        background-color: #F8F8F8;
        color:#808080 !important;
    }
    .profile-content{
        height: 200px;
        overflow-y: auto;
        padding:5px;
        /*margin-bottom:25px;*/
    }

</style>