<template>

  <div>

    <nav-bar></nav-bar>


    <h1>Profile Overview</h1>

    <h3><b>Username: </b> {{user.username}}</h3>
    <h4><b>User since: </b> {{user.created_date}}</h4>
    <h5><b>Total Post voted:</b> {{user.post_vote_count}} </h5>
    <h5><b>Total Comments voted:</b> {{user.comment_vote_count}} </h5>


    <hr>

    <h3>Your Favorite Games:</h3>
    <div class="gameobject-container"></div>
        <span v-if="user.favorite_games.length < 1">No favorite posts yet...</span>
        <game-object v-else v-for="game in user.favorite_games" :game="game" :key="game.id"></game-object>
    <br>

    <div class="clearfix"></div>
    <hr>

    <h3>Your Favorite Posts:</h3>
    <span v-if="user.favorite_posts.length < 1">No favorite posts yet...</span>
    <div v-else>
      <post-object class="post-container row" v-for="post in user.favorite_posts" :post="post" :key="post.id"></post-object>
    </div>

    <div class="clearfix"></div>
    <hr>

    <h3>Your Comments:</h3>
    <span v-if="user.comments.length < 1">No comments yet...</span>
    <div v-else >
      <comment-object class="post-container container" v-for="comment in user.comments" :comment="comment" :key="comment.id"></comment-object>
    </div>

    <div class="clearfix"></div>
    <hr>


  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'
  import GameObject from '../games/game-object.vue'
  import PostObject from '../posts/post-object.vue'
  import CommentObject from '../comments/comment-object.vue'


  export default {

    data () {
      return {
        user: {
          favorite_games: [],
          favorite_posts: [],
          comments: [],
        },
      }
    },

    components: {
      'nav-bar': NavBar,
      'game-object': GameObject,
      'post-object': PostObject,
      'comment-object': CommentObject
    },

    mounted() {

      this.$http.get('http://localhost/gameforumApi/user/profile', {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
      .then(function (response) {

        console.log(response);

        this.user = response.body.user;

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

</style>
