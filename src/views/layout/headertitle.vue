<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">{{ title }}</h4>

        <div class="page-title-right">
          <b-breadcrumb :items="subtitle" class="m-0">
               <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template>
          </b-breadcrumb>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>

<script>
    export default {
        name:"Headertitle",
        props:{
            title:{
                type:String
            },
            subtitle:{
                 type: Array,
                default: () => {
                    return [];
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>