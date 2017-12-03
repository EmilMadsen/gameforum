<template>


  <div class="container">

    <nav-bar></nav-bar>

    token: {{token}}


    <general-forums :standardForums="standardForums"></general-forums>

    <div class="clearfix">
      <hr>
      <h4>Games:</h4>
      <div class="row">
        <game-object v-for="game in games" :game="game" :key="game.id"></game-object>

      </div>
    </div>

  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'
  import GeneralForums from './standard-forums-container.vue'
  import GameObject from './game-object.vue'


export default {

  components: {
    'nav-bar': NavBar,
    'general-forums': GeneralForums,
    'game-object': GameObject
  },

  data() {

    return {
      games: {},
      standardForums: []
    }
  },

  computed: {
      token() {
          return localStorage.getItem("token");
      },
  },

  created() {

    console.log("Games - frontpage created");

      this.$http.get('http://localhost/gameforumApi/game/frontpage', {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
        .then(function (response) {

          console.log(response);

          this.games = response.body;

        }).catch(function (response) {

          console.log(response);
          alert(response);

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
