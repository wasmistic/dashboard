<template>
<v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
     <!------------------------ menu lis---------------------------->
     <v-sheet
            class="mx-auto py-auto d-flex align-items-center fixed-top"
            height="66"
            width="100%"
            color="#fff"
          > <img class="ml-5" src="@/assets/images/orbeet.png" alt height="20" /></v-sheet>
       <v-container class="mycontainer">
          
                 <!-- <sidebar-usercard :user="user"/> -->
                   <v-list dense class="mt-8">
                        <v-subheader class="sub-head mt-12 ml-2" style="font-size: 11px;color: rgba(43, 43, 43, 0.67) !important;">Main</v-subheader>
                    <!-- for testing -->
                       <!-- <v-list dense> -->
                    <nav-list   v-for="(item,i) in home_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"
                        
                        :hasChildren=item.hasChildren :show_heading="item.show_heading" ></nav-list>
                </v-list>
                <v-subheader class="sub-head" style="font-size: 11px;color: rgba(43, 43, 43, 0.67) !important;">App</v-subheader>
                
                 <v-list dense>
                    <nav-list   v-for="(item,i) in navigation_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"
                        
                        :hasChildren=item.hasChildren :show_heading="item.show_heading" ></nav-list>
                </v-list>
           <!------------------------ bottom comment---------------------------->
                    <div class="pa-2 text-center owner_div mb-10">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class=" first" color="secondary" style="font-size:10px">Support. Report . Terms of Use</v-list-item-title>
                                    <v-list-item-subtitle class="second"  color="accent">
                                        <span>&copy; Orbeet | Mobility Limited</span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>

            </v-container>
    <!------------------------ end---------------------------->
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#fff"
    >
      <v-app-bar-nav-icon id="mobile" @click.stop="mobilehandle"/>
       <v-app-bar-nav-icon id="desktop"  @click.stop="desktophandle()" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-spacer />
      <div class="d-flex">
        <b-dropdown
          variant="white"
          class="d-inline-block d-lg-none ms-2"
          toggle-class="header-item noti-icon"
          right
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end"
        >
          <template v-slot:button-content>
            <i class="uil-search"></i>
          </template>
          <form class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="('navbar.search.text')"
                  aria-label="Recipient's username"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </b-dropdown>
         <b-dropdown
          variant="white"
          class="dropdown d-inline-block"
          toggle-class="header-item noti-icon"
          right
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end"
        >
          <template v-slot:button-content>
            <i class="uil-bell"></i>
            <span class="badge bg-danger rounded-pill">3</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h5 class="m-0 font-size-16">
                  {{ ("navbar.dropdown.notification.text") }}
                </h5>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">{{
                  ("navbar.dropdown.notification.subtext")
                }}</a>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px" data-simplebar>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title bg-primary rounded-circle font-size-16"
                  >
                    <i class="uil-shopping-basket"></i>
                  </span>       
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ ("navbar.dropdown.notification.order.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ ("navbar.dropdown.notification.order.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ ("navbar.dropdown.notification.order.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-3.jpg"
                  class="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ ("navbar.dropdown.notification.james.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ ("navbar.dropdown.notification.james.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ ("navbar.dropdown.notification.james.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title bg-success rounded-circle font-size-16"
                  >
                    <i class="uil-truck"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ ("navbar.dropdown.notification.item.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ ("navbar.dropdown.notification.item.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ ("navbar.dropdown.notification.item.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ ("navbar.dropdown.notification.salena.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ ("navbar.dropdown.notification.salena.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ ("navbar.dropdown.notification.salena.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </simplebar>
          <div class="p-2 border-top">
            <a
              class="btn btn-sm btn-link font-size-14 btn-block text-center"
              href="javascript:void(0)"
            >
              <i class="uil-arrow-circle-right me-1"></i>
              {{ ("navbar.dropdown.notification.button") }}
            </a>
          </div>
        </b-dropdown> 

         <b-dropdown
          class="d-inline-block"
          toggle-class="header-item"
          right
          variant="white"
          menu-class="dropdown-menu-end"
        >
         <template v-slot:button-content>
           <div >
             <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
            />
            <span
              class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"
              >{{ ("navbar.dropdown.marcus.text") }}</span
            >
            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
           </div>
          </template>

          <!-- item-->
           <a class="dropdown-item" href="#">
            <i
              class="uil uil-user-circle font-size-18 align-middle text-muted me-1"
            ></i>
            <span class="align-middle">profile</span>
          </a>
         
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="logout()"
          >
            <i
              class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"
            ></i>
            <span class="align-middle">logout</span>
          </a>
        </b-dropdown>
      </div>
    </v-app-bar>
    <v-main style="padding:20px;">
      <v-container>
         <slot></slot>
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span class="mx-auto">Orbeet Mobility Limited  &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
  
</template>

<script>
import simplebar from "simplebar-vue";
export default {
   components: {
    simplebar
  },
  data () {
    return {
      currentAppTitle:"",
      loading: true,
      router_from:'',
      hideBottomNav:true,
      dialog: false,
      bottombar_active_btn: 0,
                // drawer: null,
      clipped: false,
      drawer: true,
      fixed: false,
      submenu:true,
       home_menu:[
                    {
                        icon: 'mdi-gauge',
                        text: 'Dashboard',
                        link: '/dashboard',
                        show:false
                    },
                    //  {
                    //     icon: 'mdi-cube-outline',
                    //     text: 'Apps',
                    //     link: 'home',
                    //     show:false
                    // },
                ],
                Setting_Menu_list:[
                    {
                        icon: 'mdi-account-tie',
                        text: 'Staff',
                        link: '',
                        show:false
                    },
                    {
                        icon: 'mdi-layers-outline',
                        text: 'Roles',
                        link: '',
                        show:false
                    },
                    {
                        icon: 'mdi-cog-outline',
                        text: 'App Setting',
                        link: '',
                        show:false
                    },
                ],
                   
               navigation_menu: [
                   {icon:'mdi-account-cash-outline', text:'Account',link:'balance'},
                   {icon:'mdi-wechat', text:'Chat',link:'chat'},
                    {//employee
                        icon:'mdi-cart-outline', 
                        icon_alt: 'mdi-chevron-up',
                        text:'Shipments',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                            { text:'All shipments',link:'all-shipments'},
                                { text:'Pending Approval',link:'pending-approval'},
                                { text:'Pending PickUp',link:'pending-pickup'},
                                { text:'Going To PickUp',link:'going-pickup'},
                                { text:'PickUp',link:'pickup'},
                                { text:'Going To Deliver',link:'going-delivere'},
                                { text:'Delivered Shipments',link:'deliver-shipment'},
                                { text:'Cancelled Shipments',link:'cancelled-shipment'},
                                { text:'Rejected Shipments',link:'rejected-shipment'},  
                        ],
                    },
                    {icon:'mdi-account-group-outline', text:'Customers',link:'customer',hasChildren:false},
                    {icon:'mdi-cash', text:'Payment',link:'payment',hasChildren:false},
                     {//Riders
                        icon:'mdi-bike-fast', 
                        icon_alt: 'mdi-chevron-up',
                        text:'Riders',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                            { text:'All Riders',link:'all-riders'},
                            { text:'Track Riders',link:'track-riders'}, 
                        ],
                    },
                    {icon:'mdi-account-cog-outline', text:'Admin',link:'admin',hasChildren:false},
                    {icon:'mdi-email-outline', text:'Email',link:'inbox',hasChildren:false},
                    {icon:'mdi-wallet-outline', text:'Wallets',link:'wallet',hasChildren:false},
                    {//projects
                    icon: 'mdi-alarm-light-outline',
                    icon_alt: 'mdi-chevron-up',
                    text: 'Push Notifications',
                    model: false,
                    prepend_icon:'mdi-chevron-down',
                    hasChildren:true,
                    children: [
                                { text:'All Notifications',link:'all-notification'},
                                { text:'Send Notification',link:'send-notification'},
                    ],
                    },

                    {//adminitrations
                        icon: 'mdi-cog-outline',
                        icon_alt: 'mdi-chevron-up',
                        text: 'Settings',
                        model: false,
                        prepend_icon:'mdi-chevron-down',
                        hasChildren:true,
                        children: [
                           
                                { text:'Price Settings',link:'price-setting'},
                                { text:'Shipment Settings',link:'shipment-setting'},
                                { text:'Payment Settings',link:'payment-setting'},
                                { text:'Change Password',link:'change-password'},
                            ],
                    },
                    // {
                    // icon: 'mdi-account-group',
                    // 'icon-alt': 'mdi-chevron-up',
                    // text: 'Students',
                    // model: false,
                    // prepend_icon:'mdi-chevron-down',
                    // hasChildren:true,
                    // children: [
                    //     { icon: 'mdi-file-outline', text: 'All Students',link:'students' },
                    //     { icon: 'mdi-file-outline', text: 'Student Assessment',link:'studentassesment' },
                    //     { icon: 'mdi-people', text: 'StudentCourse',link:'studentcourse' }
                    // ],
                    // },
               ],
       dashboard: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/dashboard/index'
        },
      ],
      items: [
        {
          icon: 'mdi-account-cog-outline',
          title: 'Account',
          to: '/balance'
        },
         {
          icon: 'mdi-wechat',
          title: 'Chat',
          to: '/chat'
        }
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
       item: [
        {
          action: 'mdi-ticket',
          items: [
            { title: 'All Shipments', to: '/all-shipments' },
            { title: 'Pending Approval', to: '/pending-approval' },
            { title: 'Pending PickUp', to: '/pending-pickup' },
            { title: 'Going To PickUp', to: '/going-pickup' },
            { title: 'PickUp', to: '/pickup' },
            { title: 'Going To Deliver', to: '/going-delivere' },
            { title: 'Delivered Shipments', to: '/deliver-shipment' },
            { title: 'Cancelled Shipments', to: '/cancelled-shipment' },
            { title: 'Rejected Shipments', to: '/rejected-shipment' },
              ],
          title: 'Shipments',
        },
       ],
    }
  },
  methods:{
      desktophandle(){
          this.miniVariant = !this.miniVariant
          this.submenu=!this.submenu
      },
        mobilehandle(){
          this.drawer= !this.drawer 
      },
      logout(){
        localStorage.removeItem("user")
        localStorage.removeItem("authentication")
        this.$router.push({name:"Login"})
      }
  }
}
 
</script>
<style scoped>
/* #main{
  margin-top: .9rem!important;
} */

#mobile{
    display:none;
}

@media(max-width:500px){
    #mobile{
        display:block;
    }
    #desktop{
        display:none;
    }
}

</style>