<template>

  <div>

    <h4>Standard Posts:</h4>
    <div class="row">
      <game-object v-for="game in generalPosts" :game="game" :key="game.id"></game-object>

    </div>


  </div>

</template>
<script>

  import GameObject from './game-object.vue'

  export default {
    components: {
      'game-object': GameObject
    },

    data() {

      return {
        generalPosts: {
          0:  {'id': 12224, 'title': 'General', "postCount": 12, 'src': 'general.jpg'},
          1:  {'id': 12312, 'title': 'Random', "postCount": 321, 'src': 'random.jpg'},
          2:  {'id': 32221, 'title': 'News', "postCount": 153, 'src': 'news.jpg'},
          3:  {'id': 32221, 'title': 'Hottest', "postCount": 113, 'src': 'hot.jpg'},
          4:  {'id': 32221, 'title': 'Rising', "postCount": 1, 'src': 'rising.jpg'},
          5:  {'id': 32221, 'title': 'Top Voted', "postCount": 0, 'src': 'topvoted.jpg'},

        }
      }
    }
  }

</script>


<style>

</style>
