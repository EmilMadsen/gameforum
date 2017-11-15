<template>

  <div>
    <div class="forum-title">
      {{capitalizeFirstLetter(test.game.title)}}
    </div>

    <br>
    <br>

    <!--{{forums}}-->
    <hr>
    <div v-for="forum in forums" class="post-container">
      {{forum.title}}
      <hr>
    </div>


  </div>

</template>
<script>
  export default {

    data () {
      return {
        forums: [],
        test: this.$route.params
      }
    },

    methods: {

      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },

    mounted() {

      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){

          this.forums = response.body;

        });

    }
  }
</script>
<style scoped>

  .forum-title {
    display: inline-block;
    font-size: 18px;
    border: solid;
    padding: 10px;
    margin: 0 0 0 10px;
    border-width: 2px;
  }

  .post-container {
    padding: 80px 0;
  }

</style>
