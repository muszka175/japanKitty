<template>
    <div class="flashcards-section" v-if="this.words.length > 0">
      <div class="flashcards-background">
        <div class="container cards">
          <div class="row">
            <div class="flashcards-container">
              <div class="flashcards">
                <span>{{ words[this.index].kana }}</span>
              </div>
              <div class="helper-container">
                <div><span>kanji</span></div>
                <div><span>kanji</span></div>
                <div><span>kanji</span></div>
                <div><span>kanji</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['words'],
  data() {
    return {
      index: 0,
      result: false
    };
  },
  methods: {

  },
  mounted() {
    console.log("Flashcards mounted");
    console.log('this', this.words);
  }
};
</script>