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

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 7px 17px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
}

button:hover {
  background-color: #3f403f;
  transition: 0.8s;
  -webkit-transition: 0.8s;
}

.create-post-title {
  width: 373px;
  margin-bottom: 5px;
}

</style>
