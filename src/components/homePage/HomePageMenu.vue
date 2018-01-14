<template>
    <nav class="col-md-9" id="nav">
      <ul>
        <li><a class="nav-button" href='#nav' v-smooth-scroll>STRONA GŁÓWNA</a></li>
        <li><a class="nav-button" href='#about-course' v-smooth-scroll>O KURSIE</a></li>
        <li><a class="nav-button" href='#offer' v-smooth-scroll>OFERTA</a></li>
        <li><a class="nav-button" href='#creators' v-smooth-scroll>TWÓRCY</a></li>
        <li><a class="nav-button" href="#contact" v-smooth-scroll>KONTAKT</a></li>
        <ul>
          <li><router-link to="/login" exact>ZALOGUJ</router-link></li>
          <li><router-link to="/register" exact>ZAREJESTRUJ</router-link></li>
        </ul>
      </ul>
    </nav>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods:{
    scrollMeTo(id) {
      const element = document.querySelector(`#${id}`);
      const top = element.offsetTop;
      window.scrollTo(0, top);    }
  }
}
</script>