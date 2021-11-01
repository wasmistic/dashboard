<template>
    <div>
          <v-text-field
                :placeholder= "placeholder"
                outlined
                dense
                style="font-weight:bold; color:black;"
              ></v-text-field>
    </div>
</template>
<script>
export default {
    name:"Input Placeholder",
    props:{
        placeholder:{
            type:String,
        }
    }
}
</script>