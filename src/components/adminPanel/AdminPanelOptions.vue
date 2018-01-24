<template>
    <div class="admin-options">  
       <h1>Zarządzanie</h1>
       <section class="text-center cube-list row">
         <div class="col-md-6"><div class="cube"><router-link to="/users-option" exact><span class="link-icon"><i class="fa fa-users" aria-hidden="true"></i></span>Użytkownicy</router-link></div></div>
         <div class="col-md-6"><div class="cube"><router-link to="/texts-option" exact><span class="link-icon"><i class="fa fa-comment-o" aria-hidden="true"></i></span>Teksty</router-link></div></div>
         <div class="col-md-6"><div class="cube"><router-link to="/facebook-option" exact><span class="link-icon"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>Facebook</router-link></div></div>
         <div class="col-md-6"><div class="cube"><router-link to="/payment-option" exact><span class="link-icon"><i class="fa fa-money" aria-hidden="true"></i></span>Mikropłatności</router-link></div></div>
       </section>
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