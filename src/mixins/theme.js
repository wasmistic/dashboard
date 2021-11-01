export const themeMixin = {
    data() {
        return {
            dark:false
        }
    },
    computed: {

        godark() {
            if (this.dark) {
                this.$vuetify.theme.dark = true
            }

             this.$vuetify.theme.dark = false
        }
    }
}