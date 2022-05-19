<template>
  <main class="row">
    <div class="col-6">
      <div class="card">
        <div class="card-header">Sign Up</div>
        <div class="card-body">
          <div class="text-danger">{{ error }}</div>
          <div class="text-success">{{ success }}</div>
          <div class="py-2">
            <label>Username</label>
            <input type="text" ref="username" class="form-control">
          </div>
          <div class="py-2">
            <label>Password</label>
            <input type="password" ref="password" class="form-control">
          </div>

          <div class="py-2">
            <label>Confirm password</label>
            <input type="password" ref="password_confirmation" class="form-control">
          </div>

          <div class="py-2">
            <label>Email</label>
            <input type="email" ref="email" class="form-control">
          </div>

          <div class="row py-2">
            <div class="col-6">
              <label>First name</label>
              <input type="text" ref="first_name" class="form-control">
            </div>
            <div class="col-6">
              <label>Last name</label>
              <input type="text" ref="last_name" class="form-control">
            </div>
          </div>

        </div>
        <div class="card-footer">
          <button @click="submitForm" class="btn btn-primary w-100">Sign Up</button>
        </div>
      </div></div>
    <div class="col-6">
      <div class="mb-4 bg-light rounded-3">
        <div class="container-fluid text-center">
          <h1 class="display-5 fw-bold text-center">Sign Up</h1>
          <p class="fs-4 text-center">You can sign Up for our platform.</p>
          <button class="btn btn-primary btn-lg" type="button">Please, check our terms!</button>
        </div>
      </div>
    </div>

  </main>

</template>

<script>

import axios from "axios";

export default {
  name: "RegisterUser",
  data() {
    return {
      error:null,
      success:null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    submitForm() {
      if(this.$refs.password.value !== this.$refs.password_confirmation.value){
        this.error = 'password does not match';
        return false;
      }

      axios.post('http://localhost:8090/api/user', {
        username:this.$refs.username.value,
        first_name:this.$refs.first_name.value,
        last_name:this.$refs.last_name.value,
        email:this.$refs.email.value,
        password:this.$refs.password.value
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
    init(){
      // axios.get('//localhost:8090/api/user/'+this.user_id).then(response => (this.user =response.data[0]))
    },

  }
}
</script>

<style scoped>

</style>