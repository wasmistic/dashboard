<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
      circle
    ></v-pagination>
    <v-pagination
    v-model="pagination.current"
    :length="pagination.total"
    @input="onPageChange"
    ></v-pagination>
  </div>
</template>
<script>
  export default {
      props:[],
    data () {
      return {
        page: 1,
        users: null,
        pagination: {
            current: 1,
                total: 0
            }
      }
    },
     methods: {
        getUsers() {
            window.axios.get('/api/users?page=' + this.pagination.current)
                .then(response => {
                    this.users = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                });
        },
        onPageChange() {
            this.getUsers();
        }
    },
  }
</script>



   