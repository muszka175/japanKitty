<template>
    <div class="flashcards-section">
      <course-header></course-header>
      <div class="flashcards-background">
        <div class="container cards">
          <div class="row">
            <div class="flashcards-container">
              <div class="flashcards">
                <span>kot</span>
              </div>
              <div class="submit-container">
                <input class="true" type="submit" value="Znam"/>
                <input class="false" type="submit" value="Nie znam"/>
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
  }
}
</script>