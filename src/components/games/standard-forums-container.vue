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
          0:  {'title': 'General', 'type': 'general'},
          1:  {'title': 'Random', 'type': 'random'},
          2:  {'title': 'Newest', 'type': 'news'},
          3:  {'title': 'Hottest', 'type': 'hot'},
          4:  {'title': 'Rising', 'type': 'rising'},
          5:  {'title': 'Top Voted', 'type': 'topvoted'},

        }
      }
    }
  }

</script>


<style>

</style>
