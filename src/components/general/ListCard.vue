<template>
    <div>
        <v-card>
            <div class="flex">
                <v-avatar color="orange lighten-4" size="60" class="mt-2">
                <v-icon>
                    mdi-{{img}}
                </v-icon>
                </v-avatar>
                <div>
                    <h1 class="text-right">{{title}}</h1>
                     <p class="font-weight-bold">
                        {{subtitle}}
                    </p>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>
export default {
    name:"ListCard",
    props:{
        title:{
            type:String,
        },
        subtitle:{
            type:String,
        },
        img:{
            type:String,require:"true",
        }
    }
}
</script>
<style scoped>
.flex{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    padding: 1rem;
}
</style>