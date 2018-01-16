<template>
  <nav class="col-md-9">
      <ul>
        <li><router-link to="/course" exact>STRONA KURSU</router-link></li>
        <li><router-link to="/settings" exact>USTAWIENIA</router-link></li>
        <ul>
          <li><a href="#" @click="signout"><span class="link-icon"><i class="fa fa-unlock" aria-hidden="true"></i></span>WYLOGUJ</a></li>
        </ul>
      </ul>
    </nav>
</template>

<script>

import authService from "../../services/authService";


export default {

  data () {
    return {

    }
  },
  methods: {
        signout() {
      const success = () => {
        this.$router.push("/home");
      };
      const error = () => {
        this.$router.push("/home");
      };
      authService.logout( success, error);
    }
  }
}
</script>