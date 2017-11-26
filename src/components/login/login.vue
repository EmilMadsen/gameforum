<template>

  <div>

    <div v-if="showLoginForm">
      Login stuff
      <br>

      <input v-model="userObject.username" placeholder="Username"/> <br>
      <input v-model="userObject.password" type="password" placeholder="Password"/><br>

      <button @click="login">Login</button>
      <br>

      <a @click="toggleShowLoginForm" style="font-size: 11px">New user? Register here</a>
    </div>



    <div v-else>

      Register stuff <br>

      <input v-model="userObject.username" placeholder="Username"/> <br>
      <input v-model="userObject.password" type="password" placeholder="Password"/><br>

      <button @click="register">Register</button><br>
      <a @click="toggleShowLoginForm" style="font-size: 11px">Already a user? Register here</a>


    </div>

  </div>

</template>
<script>

  export default {

    components: {

    },

    data() {

      return {
        showLoginForm: true,
        userObject: {
          username: null,
          password: null
        },
      }
    },

    methods: {

      toggleShowLoginForm()
      {
        this.showLoginForm = !this.showLoginForm;
      },

      login() {

        this.$http.post('http://localhost/gameforumApi/user/login', this.userObject).then(function(response){
          if(response.status === 200)
          {
            console.log(response);
            localStorage.setItem('token', response.body.token);
            localStorage.setItem('timeAlive', response.body.timeAlive);
            this.$router.push('frontpage');
          }
          else {
            alert(response.body.message);
          }

        }).catch(function (response) {
          alert(response.body.message);
        });

      },

      register() {

        this.$http.post('http://localhost/gameforumApi/user/register', this.userObject).then(function(response){
          if(response.status === 200)
          {
            console.log(response);
            localStorage.setItem('token', response.body.token);
            localStorage.setItem('timeAlive', response.body.timeAlive);
            this.$router.push('frontpage');
          }
          else {
            alert(response.body.message);
          }

        }).catch(function (response) {
          alert(response.body.message);
        });
      },

    },


    created() {

      console.log("Login was created..");

    }

  }
</script>

<style>

</style>
