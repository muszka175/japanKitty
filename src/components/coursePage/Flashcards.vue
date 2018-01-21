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
                <div><span v-if="result===false">kanji</span><span v-if="result===true">{{words[this.index].kanji }}</span></div>
                <div><span v-if="result===false">polski</span><span v-if="result===true">{{words[this.index].polish }}</span></div>
           
              </div>
              <div class="submit-container">
                <input @click="changeWord" class="true" type="submit" value="Znam"/>
                <input @click="showResult" class="false" type="submit" value="Nie znam"/>
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
    showResult(){
      this.result = true;
    },
    changeWord(){
      this.index += 1;
      this.result = false;
    }
  },
  mounted() {
    console.log("Flashcards mounted");
    console.log('this', this.words);
  }
};
</script>