<template>

  <div class="container">

    <general-forums></general-forums>

    <div class="clearfix">
      <hr>
      <h4>Games:</h4>
      <div class="row">
        <game-object v-for="game in games" :game="game" :key="game.id"></game-object>

      </div>
    </div>

  </div>

</template>
<script>

import GeneralForums from './general-forums.vue'
import GameObject from './game-object.vue'


export default {

  components: {
    'general-forums': GeneralForums,
    'game-object': GameObject
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
              games[i].postCount = Math.floor(Math.random() * 1000) + 1;
              games[i].src = "Hearthstone-285x380.jpg";
          }
          this.games = games;
        });

  }

}
</script>

<style>

</style>
