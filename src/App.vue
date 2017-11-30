<template>
  <div class="container" id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',

  components: {


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

body {
  font-family: Arial;
  background-color: #3c98e5;
  padding: 50px;
}

hr {
  border-top: 1px solid #0a0a0a52;
}

</style>
