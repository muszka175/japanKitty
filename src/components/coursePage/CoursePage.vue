<template>
  <div id="my-course">
    <course-header></course-header> 
    
    <course></course>
  </div>
</template>

<script>
import CoursePageHeader from './CoursePageHeader.vue';
import CoursePageMyCourse from './CoursePageMyCourse.vue';



export default {
    components:{
        'course-header' : CoursePageHeader,
        'course' : CoursePageMyCourse
    },
  data () {
    return {

    }
  }
}
</script>