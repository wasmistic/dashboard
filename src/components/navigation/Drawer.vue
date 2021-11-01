<template>
    <v-container>
     
        <div class="nav-list d-flex justify-center flex-row">
            <v-img src="@/assets/logo.png" max-height="80" max-width="150"></v-img>
      </div>
        <div v-if="user.has_profile==1 && user.have_request==1">
             <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in menu" :key="i">
            </side-nav>
        </div>
        <div v-else>
            <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in profiling_menu" :key="i">
            </side-nav>
        </div>
 
    </v-container>
</template>
<script>
export default {
    name:"Drawer",
    props:{
        user:{
            type:Object
        }
    },
    data(){
        return {
            profiling_menu:[
                {
                        icon: 'mdi-home-outline',
                        text: 'Profile',
                        link: 'ProfileForm',
                        show:false
                },
                {
                        icon: 'mdi-home-outline',
                        text: 'Affordabilty Test',
                        link: 'AffordabilityTest',
                        show:false
                },
                {
                        icon: 'mdi-home-outline',
                        text: 'Property Request',
                        link: 'PropertyRequest',
                        show:false
                },
            ],
             menu:[
                
                {
                        icon: 'mdi-home-outline',
                        text: 'Dashboard',
                        link: 'Dashboard',
                        show:false,
                },
                {
                        icon: 'mdi-home-outline',
                        text: 'Applications',
                        link: 'home',
                        show:false,
                },
                {
                        icon: 'mdi-home-outline',
                        text: 'Apply for Mortgage',
                        link: 'home',
                        show:false
                },
                 {
                        icon: 'mdi-logout-variant',
                        text: 'Logout',
                        link: 'logout',
                        show:false
                  },
            ],
        }
    }
}
</script>