<template>

  <div class="topnav" id="myTopnav">

    <router-link :to="{ name: 'frontpage',}">Games</router-link>

    <router-link :to="{ name: 'game', params: { id: 'newest' }}">Newest Posts</router-link>

    <router-link :to="{ name: 'game', params: { id: 'topvoted' }}">Top Voted Posts</router-link>

    <router-link :to="{ name: 'profile', params: { id: 1 }}">Profile</router-link>

  </div>

</template>

<script>
  export default {
//    name: 'nav',
  }
</script>

<style>
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #404040;
    overflow: hidden;
    text-align: center;
    margin: 0 0 40px 0;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    /*float: left;*/
    display: inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .topnav a.router-link-active {
    background-color: #5f5f5f;
    color: white;
  }
</style>
