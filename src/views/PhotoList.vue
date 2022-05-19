<template>
<main>
  <div class="p-2 mb-4 bg-light rounded-3">
    <div class="container-fluid ">
      <h1 class="display-5 fw-bold">Mishcoin</h1>
      <p class="fs-4">Welcome to the best student project ever created! This took a lot of effort, so I hope you will appreciate every minute spend to made it!</p>
    </div>
  </div>
  <div class="row">
    <div v-for="photo in photos" :ref="'photo_' +photo.pic_id" class="col-lg-4 position-relative">
      <a :href="photo.img" data-lightbox="images" :data-title="photo.caption" class="photo_cont">
      <img :src="photo.img" :alt="photo.caption" class="img-fluid img-thumbnail" loading="lazy">
      </a>
      <button @click="deletePhoto(photo.pic_id)" class="btn btn-danger position-absolute" style="bottom: 0; right: 10px;"><i class="fas fa-trash"></i></button>
    </div>
  </div>
</main>


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
    deletePhoto(id) {
      let photo='photo_'+id;
      axios.delete('http://localhost:8090/api/picture/' + id) .then(response=>(
          this.$refs[photo][0].remove()
      ))
    },
   async init(){
      axios.get('http://localhost:8090/api/pictures/') .then(response => (this.photos =response.data))
    },
  }
}
</script>

<style scoped>
.photo_cont {
  height: 300px;
  display: block;
  overflow: hidden;
}
.photo_cont img{
  width:100%;
  height: 100%;
  object-fit: cover;
}
</style>