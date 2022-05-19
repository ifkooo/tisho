<template>
  <div>
    <h1>{{username}}</h1>
    <input type="text" ref="username" :value="user.username">
    <input type="text" ref="first_name" :value="user.first_name">
    <input type="text" ref="last_name" :value="user.last_name">
    <input type="email" ref="email" :value="user.email">
    <button @click="update">Save</button>
    <div>{{error}}</div>
    <div>{{success}}</div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "PicturesView",
  props: ["user_id"],
  data() {
    return {
      user: {},
      error:null,
      success:null
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
       axios.get('//localhost:8090/api/user/'+this.user_id)
           .then(response => (this.user =response.data[0]))
    },
    update() {

      axios.put('http://localhost:8090/api/user/'+this.user_id, {
        username:this.$refs.username.value,
        first_name:this.$refs.first_name.value,
        last_name:this.$refs.last_name.value,
        email:this.$refs.email.value,
      }, {  })
          .then((res) => {
            if(res.data.status !==200) {
              this.error=res.data.message;
            }
            else {
              this.success=res.data.message;
            }
          });
    },


  }
}
</script>

<style scoped>

</style>