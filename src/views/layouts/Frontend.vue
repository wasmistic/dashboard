<template>

  <v-app >

    <v-app-bar app elevation="0" color="#fff" flat>
        <!-- <v-btn icon large v-if="!$route.meta.backRoute"  width="60" height="60" style="margin:30px 5px 5px 0">
           
            <v-avatar v-if="!apiloading " size="60px" item  >
                <v-img src="@/assets/logo.png" alt="Newhomes" />
            </v-avatar>
        </v-btn> -->
        <v-btn color="accent_text" icon large v-if="$route.meta.backRoute" @click="goBack()" style="margin-left:-10px">
            <v-icon size="20" color="#000" >mdi-arrow-left</v-icon>
        </v-btn>
      <v-spacer></v-spacer>
          <!-- <v-toolbar-title v-if="$route.meta.backRoute" >
                 {{ $route.meta.title }}
            </v-toolbar-title> -->
             <v-spacer></v-spacer>
            <v-btn text></v-btn>
    </v-app-bar>


    <v-content >

      <router-view></router-view>
    </v-content>
  </v-app>

</template>

<script>
import {themeMixin} from '../../mixins/theme'
import {loadingMixin} from "../../mixins/Loading";
export default {
  mixins:[loadingMixin],
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