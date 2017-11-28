<template>

  <div>

    <nav-bar></nav-bar>


    <div class="post-title">
      {{capitalizeFirstLetter(game.title)}}
    </div>

    <div class="post-description">
       {{ game.description }}
    </div>

    <button :disabled="favoriteLoading" @click="toggleFavorite">{{buttonText}}</button>


    <br>
    <br>

    <h5 style="margin-left: 10px; font-style: italic">Posts:</h5>

    <div>
        <div v-for="post in posts" class="post-container row container">
          <div class="post-highligting">
            <router-link :to="{ name: 'post', params: { id : post.id }}">

              <!-- ICON && TITLE -->
              <div class="col-sm-3 column-content">
                <!--<div class="font-style">-->
                <!--<i class="fa fa-tasks"></i>-->
                <!--</div>-->
                <div>
                  <h4>{{ truncateLine(post.title, 35) }}</h4>
                  <h6>{{ truncateLine(post.description, 35) }}</h6>
                </div>
              </div>

              <!-- COMMENT COUNT -->
              <div class="col-sm-3 column-content">
                <span>{{post.commentCount}} comments</span> <br>
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
        favoriteLoading: false,
        posts: [],
        game: {},
//        test: this.$route.params
      }
    },

    computed: {

        buttonText()
        {
            if(this.game.favorite == null) return 'Favorite';

            if(this.game.favorite) return 'Un-Favorite';

            return 'Favorite';
        }
    },

    methods: {

      toggleFavorite()
      {
          // to disable button, while loading..
          this.favoriteLoading = true;

          if(this.game.favorite == null || !this.game.favorite)
          {
              this.game.favorite = true;
              this.$http.get('http://localhost/gameforumApi/game/favorite?id=' + this.game.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
                .then(function (response) {
                    this.favoriteLoading = false;
                });
          }
          else
          {
              this.game.favorite = false;
              this.$http.get('http://localhost/gameforumApi/game/unfavorite?id=' + this.game.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
                .then(function (response) {
                    this.favoriteLoading = false;
                });
          }
      },

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

      // Load specific game, with all its posts.
      this.$http.get('http://localhost/gameforumApi/game/specific?id=' + this.$route.params.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
        .then(function (response) {

          this.game = response.body.game;
          this.posts = response.body.posts;

          console.log(response);

        });

    }
  }
</script>
<style scoped>

  .post-highligting {
     height: 100%;
  }

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
