<template>

  <div>

    <h4>Standard Forums:</h4>
    <div class="row">
      <standard-forum-object v-for="forum in standardForums" :forum="forum" :key="forum.index"></standard-forum-object>

    </div>


  </div>

</template>
<script>

  import StandardForumObject from './standard-forum-object.vue'

  export default {
    components: {
      'standard-forum-object': StandardForumObject
    },


//    props: {
//
//      standardForums: {
//
//        required: true,
//        type: Array
//
//      },
//    },


    data() {

      return {
        standardForums: {
          0:  {'title': 'General', "postCount": 12, 'type': 'general'},
          1:  {'title': 'Random', "postCount": 321, 'type': 'random'},
          2:  {'title': 'News', "postCount": 153, 'type': 'news'},
          3:  {'title': 'Hottest', "postCount": 113, 'type': 'hot'},
          4:  {'title': 'Rising', "postCount": 1, 'type': 'rising'},
          5:  {'title': 'Top Voted', "postCount": 0, 'type': 'topvoted'},

        }
      }
    }
  }

</script>


<style>

</style>
