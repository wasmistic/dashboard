<template>

  <v-app >

    <v-app-bar app elevation="1" color="#fff" flat>
      <v-container>
           <app-logo></app-logo>
      </v-container>
     
       
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
          <!-- <v-container> -->
             <avatar :menu="user_menu"/>
          <!-- </v-container> -->
    </v-app-bar>


    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>

</template>

<script>
import {themeMixin} from '@/mixins/theme'
import {loadingMixin} from "@/mixins/Loading";
import AppLogo from '../../components/general/AppLogo.vue';
export default {
  components: { AppLogo },
  mixins:[loadingMixin],
  data(){
    return{
      
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  },
  created(){
    this.$vuetify.theme.dark = false
    this.$vuetify.theme.light = true
  }
};
</script>
<style >
.white {
  background-color: #fff !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff !important;
}
</style>