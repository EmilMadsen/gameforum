<template>

  <div>

    <nav-bar></nav-bar>


    <h1>Profile Overview</h1>

    <h3><b>Username: </b> userbob_1337</h3>
    <h4><b>User since: </b> {{calculateDay()}}</h4>
    <h5><b>Total Post voted:</b> 54 </h5>
    <h5><b>Total Comments voted:</b> 27 </h5>


    <hr>

    <h3>Favorite Games:</h3>
    [list of games...]

    <h3>Favorite Game Companies:</h3>
    [list of companies...]


  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'


  export default {

    components: {
      'nav-bar': NavBar,
    },

    methods: {

      // Dummy method to be removed?
      calculateDay() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
          dd='0'+dd;
        }
        if(mm<10){
          mm='0'+mm;
        }
        return dd+'/'+mm+'/'+yyyy;
      }
    },
  }
</script>
<style>

</style>
