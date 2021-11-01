import EventBus from "@/Services/Event";
export const loadingMixin = {
  data() {
    return {
      apiloading: false,
      path:'',
      user_menu: [{
          title: 'Profile',
          icon: 'mdi-account-tie-outline',
          link: 'profile'
        },
        {
          title: 'Sign Out',
          icon: 'mdi-logout',
          link: 'logout'
        }
      ],
    };
  },
  computed:{
    nextUrlLink(){
      // let path = this.$store.state.paginated_module.path;
      // let page = this.$store.state.paginated_module.next;
      // return this.path+"?page="+page
    },
  },
  methods:{
    capitalizeFirst(s){
      if (typeof s !== "string") return "";
      return s.toLowerCase();
    },
    clearCommas(value) {
      return parseFloat(value.replace(/,/g, ''));
    },
    formatCurrency(value){
      const formatted = Number(value).toLocaleString("en");
      if (formatted === '0') return value;
      else if (formatted === 'NaN') return '';
      return formatted;
    },
    checkArrayLength(arr){
      let status = false;
      if(arr != null && arr.length != null
          && arr.length > 0){
        status = true
      }
      return status

    },
    // nextUrlAction(t){
    //   this.$store.dispatch("nextPageAction",t);
    // },
    // checkIfUserIsAFriend(user_id){
    //   let lists = this.$store.getters.user_compare_list;
    //   let status = false;
    //   if(lists !==null || true){
    //     lists.some((list)=>{
    //       if(list.friend_id === user_id){
    //         status = true;
    //       }
    //     })
    //     return status
    //   }
    // },
    // checkIfPropertyIsForAuthUser(property_id){
    //   let status = false;
    //   let auth_user  = this.$store.getters.userid;
    //   if(auth_user === property_id){
    //     status = true;
    //   }
    //   return status;

    // },
    // checkIfPropertyIsSaved(property_id){
    //   let list = this.$store.getters.property_compare_list;
    //   let status = false;
    //   if(list !==null || true){
    //     list.some((user)=>{
    //       if(user.property_id === property_id){
    //         status = true;
    //       }

    //     })
    //     return status
    //   }
    // }
  },
  created() {
    EventBus.$on("loading", t => {
      this.apiloading = t;
    });
  }
};
