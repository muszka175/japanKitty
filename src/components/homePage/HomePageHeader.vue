<template>
  <div class="header container-fluid">
      <div class="row">
        <logo></logo>
        <main-menu></main-menu>
    </div>
  </div>
</template>

<script>
import Logo from '../shared/Logo.vue';
import HomePageMenu from './HomePageMenu.vue';

export default {
  components:{
    'logo' : Logo,
    'main-menu' : HomePageMenu,
  },
  data () {
    return {

    }
  }
}
</script>