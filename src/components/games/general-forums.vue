<template>

  <div>

    <h4>Standard Forums:</h4>
    <div class="row">
      <forum-object v-for="game in generalForums" :game="game" :key="game.id"></forum-object>

    </div>


  </div>

</template>
<script>

  import ForumObject from './forum-object.vue'

  export default {
    components: {
      'forum-object': ForumObject
    },

    data() {

      return {
        generalForums: {
          0:  {'id': 12224, 'title': 'General', 'forumCount': 12},
          1:  {'id': 12312, 'title': 'Random', 'forumCount': 321},
          2:  {'id': 32221, 'title': 'News', 'forumCount': 153},
          3:  {'id': 32221, 'title': 'Hottest', 'forumCount': 113},
          4:  {'id': 32221, 'title': 'Rising', 'forumCount': 1},
          5:  {'id': 32221, 'title': 'Top Voted', 'forumCount': 0},

        }
      }
    }
  }

</script>


<style>

</style>
