<template>

  <div>

    <nav-bar></nav-bar>

    <div class="post-title">
      {{capitalizeFirstLetter(game.title)}}
    </div>

    <div class="post-description">
       {{ game.description }}
    </div>

    <button v-if="isGame(game.id)" :disabled="favoriteLoading" @click="toggleFavorite">{{buttonText}}</button>

    <br>
    <br>

    <button @click="toggleShowCreatePost">{{hidePostButtonTxt}}</button><br><br>
    <div v-if="showCreatePost">
      <input class="create-post-title" placeholder="Post Title" v-model="postObject.title"/><br>
      <textarea rows="4" cols="50" name="comment" placeholder="Enter post description here..." v-model="postObject.description"></textarea><br>
      <button @click="postPost">Post</button><br>
      <br>
    </div>

    <h5 style="margin-left: 10px; font-style: italic">Posts:</h5>

    <div>
        <div v-for="post in posts" class="post-container row">
          <div class="post-highligting">
            <router-link :to="{ name: 'post', params: { id : post.id }}">

              <!-- ICON && TITLE -->
              <div class="col-sm-4 column-content">
                <!--<div class="font-style">-->
                <!--<i class="fa fa-tasks"></i>-->
                <!--</div>-->
                <div>
                  <h4>{{ truncateLine(post.title, 35) }}</h4>
                  <h6>{{ truncateLine(post.description, 35) }}</h6>
                </div>
              </div>

              <!-- COMMENT COUNT -->
              <div class="col-sm-2 column-content">
                <span>{{post.commentCount}} comments</span> <br>
                <span>created 22 days ago</span>
              </div>

              <!-- LATEST COMMENT -->
              <div class="col-sm-5 column-content">
                <span><b>latest comment by email@meme.com</b></span><br>
                <span style="font-style: italic">{{truncateLine("Why is this game so bad? Back in my days games were not supposed to be bad right out of the box", 85) }}</span>
              </div>

              <!-- UP & DOWNVOTES -->
              <div class="col-sm-1 column-content">
                <div class="post-vote-area">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><br>
                  1332<br>
                  <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </div>
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
        showCreatePost: false,
        hidePostButtonTxt: 'Create Post',
        postObject: {
          title: null,
          description: null
        },
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

      toggleShowCreatePost()
      {
        this.showCreatePost = !this.showCreatePost;
        if (!this.showCreatePost) this.hidePostButtonTxt = 'Create Post';
        else this.hidePostButtonTxt = 'Hide';
      },

      isGame(id)
      {
          // logic to tell games and general-forums apart.
          return true;
//          if(id < 5) return true;
//          return false;
      },

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

      postPost()
      {
        this.$http.post('http://localhost/gameforumApi/post/create', this.postObject, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {

            console.log(response);

            var tempPostObject = {
              commentCount: 0,
              id: 313,
              title: this.postObject.title,
              description: this.postObject.description
            }

            this.posts.push(tempPostObject);
            this.postObject.title = null;
            this.postObject.description = null;
        });
      }
    },

    mounted() {

      // Load specific game, with all its posts.
      this.$http.get('http://localhost/gameforumApi/game/specific?id=' + this.$route.params.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
        .then(function (response) {

          this.game = response.body.game;
          this.posts = response.body.posts;

//          console.log(response);

        });

    }
  }
</script>
<style>

  body {
    font-family: Arial;
    background-color: #c3c3c352;
    padding: 0px;
  }

  .post-highligting {
     height: 100%;
    padding-top: 10px;
    background-color: #2e2f2e;
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
    border-width: 1px;
  }

  .post-description {
    display: table;
    font-size: 12px;
    border: solid;
    padding: 10px;
    margin: 0 0 30px 10px;
    border-width: 1px;
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

  /*.column-content {*/
    /*margin-top: 14px;*/
  /*}*/

  .column-content span {
    font-size: 11px;
  }

  .post-vote-area {
    padding-top: 3px;
  }


</style>
