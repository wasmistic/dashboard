<template>
    <div>
        <v-list-item :to="data.link" link v-if="!hasChildren" @click="goLink(data.link)" active-class="highlighted"
    :class="data.link === $route.path ? 'highlighted' : ''"  :exact="data.exact" >
            <v-list-item-action>
              <v-icon :class="data.link === $route.path ? 'text-highlighted' : ''">{{data.icon}}</v-icon>
              
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title  :class="data.link === $route.path ? 'text-highlighted' : ''">
                {{data.text}}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-group link v-if="hasChildren"
            :prepend-icon="data.model ? data.icon : data.icon_alt" :append-icon="data.model ? 'mdi-chevron-up' : 'mdi-chevron-down'" active-class="highlighted">
            <template v-slot:activator >
                <v-list-item-action>
              <v-icon :class="data.link === $route.path ? 'text-highlighted' : ''" >{{data.icon}}</v-icon>
              <!-- <v-icon :class="data.link === $route.name ? 'text-highlighted' : ''" >{{data.icon}}</v-icon> -->
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title >
                      {{data.text}}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
              <!-- <v-icon >mdi-chevron-right</v-icon> -->
              <!-- <v-icon :class="data.link === $route.name ? 'text-highlighted' : ''" >{{data.icon}}</v-icon> -->
            </v-list-item-action>
            </template>
            <v-list-item :to="item.link" v-for="(item,i) in data.children" :key="i" @click="goLink(item.link)" link :class="item.link === $route.path ? 'highlighted' : ''">
              <v-list-item-action  >
                <v-icon></v-icon>
                <!-- <v-icon>{{item.icon}}</v-icon> -->
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title  :class="item.link === $route.path ? 'text-highlighted' : ''">
                  {{item.text}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </div>
</template>
<script>
export default {
    props:['data','hasChildren'],
    data(){
      return{
        // hasChildren:false
      }
    },
    methods: {
        goLink(link){
          if (this.$route.path !== link){
            this.$router.push({path:link});
          }
         
        },
    },
    created() {
    },
}
</script>
<style scoped>
  .highlighted{
     background-color:rgba(0, 122, 245, 0.12);
     /* border-radius:30px; */
     border-right:3px solid blue; 
     border-left:3px solid blue; 
    /* color:#0075f1; */
  }
 
  .text-highlighted{
    color:#0075f1;
  }
  .active{
  background-color:#0168f3;
  color:#fff;
}
.router-link-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
.router-link-exact-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
</style>