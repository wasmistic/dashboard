<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>


  </div>
</template>
<script>
export default {
    name:"Breadcrumb",
    data(){
        return{
           items:[  {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: this.$route.meta.title,
          disabled: false,
          href: 'breadcrumbs_link_1',
        }],
        }
    },
    computed:{
        
    }
}
</script>