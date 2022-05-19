<template>
  <main class="row">
    <div class="col-6">
      <div class="card">
      <div class="card-header">Upload Photo</div>
      <div class="card-body">
        <div class="text-danger">{{ error }}</div>
        <div class="text-success">{{ success }}</div>

        <div class="py-2">
          <label>Caption</label>
          <input type="text" ref="caption" placeholder="Caption" class="form-control">
        </div>
        <div class="py-2">
          <label>Photo</label>
          <input type="file" ref="file" @change="createImg" class="form-control">
        </div>
      </div>
      <div class="card-footer">
        <button @click="submitForm" class="btn btn-primary w-100">Upload</button>
      </div>
    </div></div>
    <div class="col-6">
      <div class="mb-4 bg-light rounded-3">
        <div class="container-fluid text-center">
          <h1 class="display-5 fw-bold text-center">Upload your photo</h1>
          <p class="fs-4 text-center">Every uploaded photo will be visible for our users.</p>
          <button class="btn btn-primary btn-lg" type="button">Please, check our terms!</button>
        </div>
      </div>
    </div>

  </main>
</template>

<script>

import axios from "axios";

export default {
  name: "UploadPhoto",
  data() {
    return {
      file: null,
      error: null,
      base64Img: null,
      success: null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    toBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },
    createImg() {
      this.toBase64(this.$refs.file.files[0]).then(res => {
        this.base64Img = res;
      })
    },
    submitForm() {
      axios.post('http://localhost:8090/api/picture', {
        'caption': this.$refs.caption.value,
        'img': this.base64Img,

      }, {})
          .then((res) => {
            if (res.data.status !== 200) {
              this.error = res.data.message;
            } else {
              this.success = res.data.message;
            }
          });
    },
    init() {
      // axios.get('//localhost:8090/api/user/'+this.user_id).then(response => (this.user =response.data[0]))
    },

  }
}
</script>

<style scoped>

</style>