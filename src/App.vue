<template>
  <div class="container" id="app">

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

.post-highligting {
  background-color: #2e2f2e;
  color: #337ab7;
}

.post-entry {
  padding-top: 10px;
  height: 100%;
}

.img-wrapper {
  width: 140px;
  height: 186px;
  border: 1px solid grey;
}
img {
  width: 100%;
  /*height: 100px;*/
  /*object-fit: cover;*/
}

.description-box {
  border: solid;
  border-color: darkgray;
  border-width: 1px;
  padding: 10px 10px;
}

.post-title {
  display: inline-block;
  font-size: 18px;
  border: solid;
  padding: 10px;
    border-width: 1px;
}

.post-description {
  display: table;
  font-size: 12px;
  border: solid;
  padding: 10px;
  border-width: 1px;
}

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

.fa
{
  font-size: 15px;
}

.center-text {
  text-align: center;
}

.post-vote-area {
  padding-top: 3px;
}

.vote-area {
  padding-top: 10px;
}

</style>
