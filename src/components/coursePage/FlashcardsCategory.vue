<template>
    <div class="category">
        <course-header></course-header> 
        <div class="container">
            <div class="category-list">
                <div class="row">
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span><router-link to="/flashcards" exact>Hiragana</router-link></span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Katakana</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Podstawy</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Podstawy 2</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Zwierzęta</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Miejsca</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Rodzina</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Poziom średni</span>
                        </div>
                    </div>
                    <div class="container-cube col-md-4">
                        <div class="cube">
                            <span>Poziom średni 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoursePageHeader from './CoursePageHeader.vue';


export default {
    components:{
        'course-header' : CoursePageHeader,
    },
  data () {
    return {

    }
  },
       methods: {
  //   validateBeforeSubmit(e) {
  //       this.$validator.validateAll();
  //       if (!this.errors.any()) {
  //           this.submitForm()
  //       }
  //     },
  //   submitForm(){
  //     this.formSubmitted = true
  //   }
      test() {
        this.$http.get("http://localhost/app/Http/Controllers/API/Courses.php")
        .then((response)=> {
          console.log(response)
        })
      }
   }
}
</script>