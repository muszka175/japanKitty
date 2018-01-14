<template>
  <div>
    <app-header></app-header>
    <banner></banner>
    <about-course></about-course>
    <offer></offer>
    <creator></creator>
    <contact></contact>
  </div>
</template>

<script>
import HomePageAboutCourse from './HomePageAboutCourse.vue';
import HomePageBanner from './HomePageBanner.vue';
import HomePageContact from './HomePageContact.vue';
import HomePageCreator from './HomePageCreators.vue';
import HomePageHeader from './HomePageHeader.vue';
import HomePageOffer from './HomePageOffer.vue';


export default {
    components:{
        'about-course': HomePageAboutCourse,
        'banner' : HomePageBanner,
        'contact' : HomePageContact,
        'creator' : HomePageCreator,
        'app-header' : HomePageHeader,
        'offer' : HomePageOffer,
    },
  data () {
    return {

    }
  }
}
</script>