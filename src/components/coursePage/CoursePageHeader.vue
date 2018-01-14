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
import CoursePageMenu from './CoursePageMenu.vue';



export default {
  components:{
    'logo' : Logo,
    'main-menu' : CoursePageMenu
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
   @import '../../../scss/main.scss'

</style>