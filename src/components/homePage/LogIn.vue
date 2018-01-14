<template>
  <div>
    <app-header></app-header>
    <div class="login-section">
      <div class="login">
        <h1>Login</h1>
        <form class="form" method="post" action="#" @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
          <div class="field">
            <input v-model="email" class="form-control" type="email" placeholder="Email"/>
            <i class="fa fa-user" aria-hidden="true"></i>
            <!-- <p class="text-danger" v-show ="errors.has('name')">{{ errors.first('name') }}</p> -->
          </div>
          <div class="field">
            <input v-model="password" class="form-control" type="password" placeholder="Password"/>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <!-- <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p> -->
          </div>
          <p class="submit"><input @click="test" type="submit" name="sent" value="Login"/></p>
        </form>
        <div v-else>
          <h1 class="submitted">Form submitted successfully!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from './HomePageHeader.vue';

export default {
  components:{
    'app-header' : HomePageHeader
  },
  data () {
    return {
      email: '',
      password: '',
      formSubmitted: false
    }
  },
   methods: {
  //   validateBeforeSubmit(e) {
  //       this.$validator.validateAll();
  //       if (!this.errors.any()) {
  //           this.submitForm()
  //       }
  //     },
  //   submitForm(){
  //     this.formSubmitted = true
  //   }
      test() {
        this.$http.get("http://localhost/api/login")
        .then((response)=> {
          console.log(response)
        })
      }
   }
}
</script>