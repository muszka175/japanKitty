<template>
    <div>
        <main-menu class="navbar-toggleable-md"></main-menu>
        <div class="container"> 
            <options></options>
        </div>
    </div>
</template>

<script>
import Options from './AdminPanelOptions.vue';
import Menu from '../coursePage/CoursePageHeader.vue';

export default {
  components: {
    "options": Options,
    "main-menu": Menu
  },
  data () {
    return{

    }
  },
}
</script>