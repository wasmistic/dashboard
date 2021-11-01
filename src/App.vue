<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
    font-family: 'euclid_circular_aregular';
    src: url('~@/assets/fonts/euclidcirculara-regular-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/euclidcirculara-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
body,html,.v-application{
  font-family:"euclid_circular_aregular"!important;
   -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}


body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>

