<template>
  <div class="sidebar-left">
      <sidebar-nav></sidebar-nav>
  </div>
</template>

<script>
import SidebarNav from './SidebarNav.vue';



export default {
  components:{
    'sidebar-nav' : SidebarNav,
  },
  data () {
    return {

    }
  }
}
</script>