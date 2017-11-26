<template>

  <div>

    <nav-bar></nav-bar>


    <div class="post-title">
      {{capitalizeFirstLetter(game.title)}}
    </div>

    <div class="post-description">
       Game Description... Awesome!
    </div>


    <br>
    <br>

    <h5 style="margin-left: 10px; font-style: italic">Posts:</h5>

    <div>
        <div v-for="post in posts" class="post-container row container">
          <router-link :to="{ name: 'post', params: { id : post.id }}">

            <!-- ICON && TITLE -->
              <div class="col-sm-3 column-content">
                  <!--<div class="font-style">-->
                      <!--<i class="fa fa-tasks"></i>-->
                  <!--</div>-->
                  <div>
                      <h4>Post Title</h4>
                      <h6>{{ truncateLine(post.title, 35) }}</h6>
                  </div>
              </div>

              <!-- COMMENT COUNT -->
              <div class="col-sm-3 column-content">
                <span>222 comments</span> <br>
                <span>created 22 days ago</span>
              </div>

              <!-- LATEST COMMENT -->
              <div class="col-sm-3 column-content">
                <span><b>latest comment by email@meme.com</b></span><br>
                <span style="font-style: italic">{{truncateLine("Why is this game so bad? Back in my days games were not supposed to be bad right out of the box", 85) }}</span>
              </div>

              <!-- UP & DOWNVOTES -->
              <div class="col-sm-3 column-content">
                votes
              </div>
          </router-link>

        </div>
    </div>


  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'

  export default {

    components: {
      'nav-bar': NavBar,
    },

    data () {
      return {
        posts: [],
        game: {},
//        test: this.$route.params
      }
    },

    methods: {

      capitalizeFirstLetter(string) {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },
    },

    mounted() {

      // load "game" from route params
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
        .then(function(response){

          this.game = response.body;

        });

      // load posts - TODO: add game id to get its posts
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response){

        this.posts = response.body;

      });
    }
  }
</script>
<style scoped>

  h4 {
    margin-top: 3px;
  }

  .font-style {
    font-size: 32px;
    color: lightgray;
  }

  .post-title {
    display: inline-block;
    font-size: 18px;
    border: solid;
    padding: 10px;
    margin: 0 0 30px 10px;
    border-width: 2px;
  }

  .post-description {
    display: table;
    font-size: 12px;
    border: solid;
    padding: 10px;
    margin: 0 0 30px 10px;
    border-width: 2px;
  }

  .post-container {
    height: 90px;
    border-bottom: solid;
    border-width: 1px;
    border-color: lightgray;
  }
  .post-container:first-child {
    border-top: solid;
    border-width: 1px;
    border-color: lightgray;
  }

  .column-content {
    margin-top: 14px;
  }

  .column-content span {
    font-size: 11px;
  }


</style>
