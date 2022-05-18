<template>
<div>
  <div v-for="photo in photos">{{photo.pic_id}} {{photo.caption}} </div>
</div>


</template>

<script>
import axios from "axios";

export default {
  name: "PicturesView",
  data() {
    return {
      photos:null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      axios.get('http://localhost:8090/api/pictures/') .then(response => (this.photos =response.data))
    },

  }
}
</script>

<style scoped>

</style>