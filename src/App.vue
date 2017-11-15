<template>
  <div class="container" id="app">
    <nav-bar></nav-bar>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

  import NavBar from './components/shared/nav-bar.vue'

export default {
  name: 'app',

  components: {

    'nav-bar': NavBar,

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin: 0 200px;*/
}
</style>
