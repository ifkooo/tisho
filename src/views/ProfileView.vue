<template>
  <div>
    <h1>{{username}}</h1>
    <h2>{{user.first_name}} {{user.last_name}} na {{user.age}} godini</h2>
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

  }
}
</script>

<style scoped>

</style>