<template>

  <div>

    <nav-bar></nav-bar>

    <div v-if="contentLoading" class="loader">

      <span style="margin: 0 auto; display: table;"><b>Loading...</b></span>

          <img style="display: block; margin: 0 auto; width: 10%;" src="../../assets/loader.svg">
      <div class="clearfix"></div>

      <span style="margin: 0 auto; display: table; font-style: italic">Constructing Additional Pylons... </span>

    </div>

    <div v-else>
        <div class="description-box">

          <div v-if="isGame">
            <span class="description-title">Title:</span><br>
            <div class="post-title">
              {{capitalizeFirstLetter(game.title)}}
            </div><br><br>

            <span class="description-title">Description:</span>
            <div class="post-description">
              {{ game.description }}
            </div><br>

            <span class="description-title">Developer: </span>{{game.developer_name}}<br>
            <span class="description-title">Publisher: </span>{{game.publisher_name}}<br>
            <span class="description-title">Release Date: </span>{{game.release_date}}

          </div>

          <div v-else style="padding-left: 10px">
              <h3>This is the {{this.$route.params.id}} forum.. Welcome!</h3>
              <h4>This is a standard forum.</h4>
              <h4>You can only post new content within the game forums.</h4>
          </div>

        </div>

        <button v-if="isGame" :disabled="favoriteLoading" @click="toggleFavorite">{{favoriteButtonText}}</button><br><br>

        <div v-if="showCreateButton">
          <button @click="toggleShowCreatePost">{{hidePostButtonTxt}}</button><br><br>
          <div v-if="showCreatePost">
            <input class="create-post-title" placeholder="Post Title" v-model="postObject.title"/><br>
            <textarea rows="4" cols="50" name="comment" placeholder="Enter post description here..." v-model="postObject.description"></textarea><br>
            <button @click="postPost">Submit</button><br><br>
          </div>
        </div>


        <h5 style="margin-left: 10px; font-style: italic">Posts sorted by date:</h5>

        <div>
            <post-object v-for="post in posts" :post="post" :key="post.id" class="post-container row"></post-object>
        </div>
    </div>

  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'
  import PostObject from '../posts/post-object.vue';

  export default {

    components: {
      'nav-bar': NavBar,
      'post-object' : PostObject,
    },

    data () {
      return {
        favoriteLoading: false,
        contentLoading: true,
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

      imageSrc()
      {
        console.log("Got here");
        var images = require.context('../../assets/', false, /\.jpg$/);

        if (this.game.src == null) return images('./404_boxart-285x380.jpg');

        return images('./' + this.game.src);
      },

      favoriteButtonText()
      {
          if(this.game.favorite == "1") return 'Un-Favorite';

          return 'Favorite';
      },

      isGame()
      {
        return this.routeParams % 1 === 0;
      },

      showCreateButton()
      {
          if (this.isGame) return true;
          return false;
//            return (this.$route.params.id === 'general' || this.$route.params.id === 'random')
      },

      routeParams()
      {
          return this.$route.params.id;
      }


    },

    methods: {

      toggleShowCreatePost()
      {
        this.showCreatePost = !this.showCreatePost;
        if (!this.showCreatePost) this.hidePostButtonTxt = 'Create Post';
        else this.hidePostButtonTxt = 'Hide';
      },

      toggleFavorite()
      {
          // to disable button, while loading..
          this.favoriteLoading = true;

          if(this.game.favorite == "0")
          {
            console.log("About to favorite..");
              this.$http.get('http://localhost/gameforumApi/game/favorite?id=' + this.game.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
                .then(function (response) {
                  this.game.favorite = "1";
                  this.favoriteLoading = false;
                });
          }
          else
          {
            this.$http.get('http://localhost/gameforumApi/game/unfavorite?id=' + this.game.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
                .then(function (response) {
                  this.game.favorite = "0";
                  this.favoriteLoading = false;
                });
          }
          this.$forceUpdate();
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

        var tempPostObject = {
          game_id: this.game.id,
          title: this.postObject.title,
          content: this.postObject.description
        };

        this.$http.post('http://localhost/gameforumApi/post/create', tempPostObject, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {

            this.posts.push(response.body[0]);
            this.postObject.title = null;
            this.postObject.description = null;
        });
      },

      loadData()
      {
        // Load specific game, with all its posts.
        if (this.$route.params.id % 1 === 0) {

          this.$http.get('http://localhost/gameforumApi/game/specific?id=' + this.$route.params.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {

              console.log(response);
//            if (this.$route.params.id % 1 === 0) this.game = response.body.game;
              this.game = response.body.game;
              this.posts = response.body.posts;
              this.contentLoading = false;

//          console.log(response);
            });
        }
        else {
          this.$http.get('http://localhost/gameforumApi/post/' + this.$route.params.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {

              console.log("Standard posts response:");
              console.log(response);
              this.game.loading = "done"; // minor hack, to stop the loading..
              this.posts = response.body;
              this.contentLoading = false;

//          console.log(response);
            });
        }
      }
    },

    watch: {

      // Trigger new data load, if the route params change..
      routeParams()
      {
        this.loadData();
      }

    },

    created() {

      this.loadData();

    }
  }
</script>
<style>

  input {
     text-align: left;
     background-color: #ffffff;
     border: 1px solid darkgray;
    border-radius: 0px;
    font-size: 14px;
    font-weight: 100;
    padding: 2px;
    width: 250px;
    -webkit-transition: border .5s;
    transition: border .5s;
  }

  body {
    font-family: Arial;
    background-color: #c3c3c352;
    padding: 0px;
  }


  h4 {
    margin-top: 3px;
  }

  .font-style {
    font-size: 32px;
    color: lightgray;
  }

  /*.column-content {*/
    /*margin-top: 14px;*/
  /*}*/




</style>
