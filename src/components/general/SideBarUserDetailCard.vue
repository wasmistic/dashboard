<template>
      <v-card
    class="mx-auto"
    max-width="344"
    outlined
    id="card"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Sidtrix Admin Dashboard
         
        </div>
        <v-list-item-title class="headline3 mb-1">
          {{user.first_name}} {{user.last_name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
      </v-list-item-content>
<!-- 
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
    </v-list-item>
      </v-card>
</template>
<script>
export default {
    name:"SideBarUserDetailCard",
    props:{
        user:{type:Object},
        client:{type:Object},
    }
}
</script>
<style scoped>
#card{
  display: none;
}
</style>