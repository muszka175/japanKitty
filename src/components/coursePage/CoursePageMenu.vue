<template>
  <nav class="col-md-9">
      <ul>
        <li><router-link to="/course" exact>STRONA KURSU</router-link></li>
        <li><router-link to="/settings" exact>USTAWIENIA</router-link></li>
        <ul>
          <li><router-link to="/home" exact><span class="link-icon"><i class="fa fa-unlock" aria-hidden="true"></i></span>WYLOGUJ</router-link></li>
        </ul>
      </ul>
    </nav>
</template>

<script>




export default {

  data () {
    return {

    }
  }
}
</script>