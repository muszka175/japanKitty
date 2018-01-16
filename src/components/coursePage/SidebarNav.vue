<template>
  <div class="align-self-start">
    <div class="vertical-menu row">
      <ul>
        <li><router-link to="/game/1/category" exact><span class="link-icon"><i class="fa fa-pagelines" aria-hidden="true"></i></span>Fiszki</router-link></li>
        <li><router-link to="/game/2/category" exact><span class="link-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></span>Rozsypanka</router-link></li>
        <li><router-link to="/game/3/category" exact><span class="link-icon"><i class="fa fa-building" aria-hidden="true"></i></span>Uzupełnianka</router-link></li>
        <li><router-link to="/game/4/category" exact><span class="link-icon"><i class="fa fa-question" aria-hidden="true"></i></span>Quizy</router-link></li>
        <li><router-link to="/game/5/category" exact><span class="link-icon"><i class="fa fa-hourglass-end" aria-hidden="true"></i></span>Wisielec</router-link></li>
        <li><router-link to="/game/6/category" exact><span class="link-icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>Słownik</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {

  data () {
    return{

    }
  },
}
</script>