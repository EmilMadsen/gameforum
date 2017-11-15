<template>

  <div class="container">

    <general-forums></general-forums>

    <div class="clearfix">
      <hr>
      <h4>Game Forums:</h4>
      <div class="row">
        <forum-object v-for="game in games" :game="game" :key="game.id"></forum-object>

      </div>
    </div>

  </div>

</template>
<script>

import GeneralForums from './general-forums.vue'
import ForumObject from './forum-object.vue'


export default {

  components: {
    'general-forums': GeneralForums,
    'forum-object': ForumObject
  },

  data() {

    return {
      games: {}
    }
  },


  created() {

      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
          var games = response.body;
          for (var i = 0; i < games.length; i++){
              games[i].forumCount = Math.floor(Math.random() * 1000) + 1  ;
          }
          this.games = games;
        });

  }

}
</script>

<style>

</style>
