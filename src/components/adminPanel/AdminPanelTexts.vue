<template>
  <div>  
    <main-menu class="navbar-toggleable-md"></main-menu>
    <div class="texts-section">  
                <div class="texts"> 
                    <h1>Teksty na stronie</h1>
                    <div class="message">{{this.message}}</div>
                    <form class="form" method="post" action="#" v-if="!submitted">
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerDescription') }">
                    <input v-model="texts.offerDescription" data-vv-rules="alpha|min:3" class="form-control" type="text" name="offerDescription" placeholder="Opis oferty"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerDescription')">{{ errors.offerDescription[0] }}</p>
                </div>
                 <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption1') }">
                    <input v-model="texts.offerOption1" class="form-control" type="text" name="offerOption1" placeholder="Opcja numer 1" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption1')">{{ errors.offerOption1[0] }}</p>
                </div>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption2') }">
                    <input v-model="texts.offerOption2" class="form-control" type="text" name="offerOption2" placeholder="Opcja numer 2" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption2')">{{ errors.offerOption2[0] }}</p>
                </div>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('offerOption3') }">
                    <input v-model="texts.offerOption3" class="form-control" type="text" name="offerOption3" placeholder="Opcja numer 3" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('offerOption3')">{{ errors.offerOption3[0] }}</p>
                </div>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('contactDescription') }">
                    <input v-model="texts.contactDescription" class="form-control" type="text" name="contactDescription" placeholder="Kontakt opis" data-vv-rules="alpha|min:3"/>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <p class="text-danger" v-if="errors.hasOwnProperty('contactDescription')">{{ errors.contactDescription[0] }}</p>
                </div>
                <div class="field" :class="{'has-error': errors.hasOwnProperty('aboutCourse') }">
                    <textarea v-model="texts.aboutCourse" class="form-control" type="text" name="aboutCourse" placeholder="Opis kursu" data-vv-rules="alpha|min:3"></textarea>
                    <p class="text-danger" v-if="errors.hasOwnProperty('aboutCourse')">{{ errors.aboutCourse[0] }}</p>
                </div>
                
                <p class="submit"><input @click="add" type="button" name="sent" value="Dodaj"/></p>
                </form>
        </div>
    </div>
  </div>
</template>

<script>
import Menu from '../coursePage/CoursePageHeader.vue';

export default {
  components: {
    "main-menu": Menu
  },
  data () {
    return{
      texts: {}
    }
  },
}
</script>