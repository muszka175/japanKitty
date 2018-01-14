<template>
  <div>
    <app-header></app-header>
      <div class="register-section">
        <div class="register">
        <h1>Rejestracja</h1>
        <form class="form" method="post" action="#" @submit.prevent="validateBeforeSubmit" v-if="!submitted">
          <div class="field" :class="{'has-error': errors.hasOwnProperty('name') }">
            <input v-model="register.name" data-rules="required|alpha|min:3" class="form-control" type="text" name="name" placeholder="Imię"/>
            <i class="fa fa-user" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('name')">{{ errors.name[0] }}</p>
          </div>
          <!-- <p class="field">
            <input v-model="register.lastname" class="form-control" type="text" name="lastname" placeholder="Nazwisko" required/>
            <i class="fa fa-address-card" aria-hidden="true"></i>
          </p> -->
          <div class="field" :class="{'has-error': errors.hasOwnProperty('email') }">
            <input v-model="register.email" data-rules="required|email" class="form-control" type="email" name="email" placeholder="E-mail"/>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('email')">{{ errors.email[0] }}</p>
          </div>
          <div class="field" :class="{'has-error': errors.hasOwnProperty('password') }">
            <input v-model="register.password" data-rules="required|password" class="form-control" type="password" name="password" placeholder="Hasło"/>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <p class="text-danger" v-if="errors.hasOwnProperty('password')">{{ errors.password[0] }}</p>
          </div>
          <div class="field">
            <input v-model="register.confirmPassword" data-rules="required|confirmPassword" class="form-control" type="password" name="confirmPassword" placeholder="Powtórz hasło" required/>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <p class="text-danger" v-if="register.password !== register.confirmPassword">Hasła nie są zgodne</p>
          </div>
          <!-- <p class="field radioButton">
            <input id="box1" class="form-control" type="radio" name="sex" required v-model="register.sex"/>
            <label class="women" for="box1">Kobieta</label>
            <input id="box2" class="form-control" type="radio" name="sex" required v-model="register.sex"/>
            <label for="box2">Mężczyzna</label>
          </p>
          <p class="field">
            <input v-model="register.bday" class="form-control" type="date" name="bday" placeholder="Data urodzenia" required/>
            <i class="fa fa-calendar" aria-hidden="true"></i>
          </p> -->
          <p class="submit"><input @click="test" type="button" name="sent" value="Register"/></p>
        </form>
        <div v-if="submitted" class="after-register">
            <h3 class="after-register-header">Dziękujemy za poprawne zarejestrowanie się!</h3>
            <span>Aby przejść do kursu kliknij przycik poniżej.</span>
            <span>Życzymy owocnej nauki, </span>
            <span class="last-span">zespół JapanKitty</span>
            <router-link to="/course" exact><input type="button" value="Przejdź do kursu" class="after-register-button"/></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from "./HomePageHeader.vue";

export default {
  components: {
    "app-header": HomePageHeader
  },

  data() {
    return {
      register: {
        name: "",
        // lastname: '',
        email: "",
        password: "",
        confirmPassword: '',
        // sex: '',
        // bday: ''
      },
      submitted: false,
      errors: {
        
      }
    };
  },
  methods: {
    test() {
      this.$http
        .post("http://localhost/api/register", this.register)
        .then(response => {
          this.submitted = true;
        })
        .catch(response => {
            console.log(response);
            this.errors = response.body.error;
            console.log(this.errors)
        })
    },
        validateBeforeSubmit(e) {
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.submitted = true
    }
  }
};
</script>