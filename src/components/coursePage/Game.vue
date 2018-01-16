<template>
  <div id="game">
    <course-header></course-header> 
    <div class="container">
        <div>
            <!-- <pre>{{ words }}</pre> -->
            <flashcards v-bind:words="this.words" v-if="this.gameId===1"></flashcards> -->
            <span v-if="this.gameId===2">Rozsypanka</span>
            <span v-if="this.gameId===3">Uzupełnianka</span>
            <span v-if="this.gameId===4">Quizy</span>
            <span v-if="this.gameId===5">Wisielec</span>
            <span v-if="this.gameId===6">Słownik</span>
        </div>
    </div>
  </div>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import Flashcards from "./Flashcards.vue";

export default {
  components: {
    "course-header": CoursePageHeader,
    flashcards: Flashcards
  },
  data() {
    return {
      gameId: parseInt(this.$route.params.gameId),
      categoryId: this.$route.params.categoryId,
      words: []
    };
  },
  methods: {},
  mounted() {
    this.$http.get("vocabulary/" + this.categoryId).then(response => {
    this.words = response.body;
    });
  }
};
</script>