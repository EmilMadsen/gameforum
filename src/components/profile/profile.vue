<template>

  <div>

    <nav-bar></nav-bar>


    <h1>Profile Overview</h1>

    <h3><b>Username: </b> {{user.username}}</h3>
    <h4><b>User since: </b> {{user.created_at}}</h4>
    <h5><b>Total Post voted:</b> {{user.total_post_votes}} </h5>
    <h5><b>Total Comments voted:</b> {{user.total_comments_votes}} </h5>


    <hr>

    <h3>Favorite Games:</h3>
    <div class="gameobject-container"></div>
      <game-object v-for="game in user.favorite_games" :game="game" :key="game.id"></game-object>
    <br>

    <div class="clearfix"></div>
    <hr>

    <h3>Favorite Game Companies:</h3>
    <span v-if="user.favorite_game_companies.length < 1">No favorite game companies yet...</span>

    <div class="clearfix"></div>
    <hr>

    <h3>Posts:</h3>
    <span v-if="user.posts.length < 1">No posts yet...</span>

    <div class="clearfix"></div>
    <hr>

    <h3>Comments:</h3>
    <span v-if="user.posts.length < 1">No comments yet...</span>


    <div class="clearfix"></div>
    <hr>


  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'
  import GameObject from '../games/game-object.vue'


  export default {

    data () {
      return {
        user: {
          favorite_games: [],
          favorite_game_companies: [],
          posts: [],
          comments: [],
        },
      }
    },

    components: {
      'nav-bar': NavBar,
      'game-object': GameObject

    },

    methods: {

//      // Dummy method to be removed?
//      calculateDay() {
//        var today = new Date();
//        var dd = today.getDate();
//        var mm = today.getMonth()+1; //January is 0!
//
//        var yyyy = today.getFullYear();
//        if(dd<10){
//          dd='0'+dd;
//        }
//        if(mm<10){
//          mm='0'+mm;
//        }
//        return dd+'/'+mm+'/'+yyyy;
//      }
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
