<template>

  <div class="backgrounding">


    <div v-if="showLoginForm" class="login">
      <div class="login-screen">
        <div class="app-title">
          <h1>Login</h1>
        </div>

        <div class="login-form">
          <div class="control-group">
            <input v-model="userObject.username" type="text" class="login-field" value="" placeholder="username">
          </div>

          <div class="control-group">
            <input v-model="userObject.password" type="password" class="login-field" value="" placeholder="password">
          </div>

          <button @click="login" class="btn btn-primary btn-large btn-block">login</button>
          <a class="login-link" @click="toggleShowLoginForm">New user? Register here</a>
        </div>
      </div>
    </div>

    <div v-else class="login">
      <div class="login-screen">
        <div class="app-title">
          <h1>Register</h1>
        </div>

        <div class="login-form">
          <div class="control-group">
            <input v-model="userObject.username" type="text" class="login-field" value="" placeholder="username">
          </div>

          <div class="control-group">
            <input v-model="userObject.password" type="password" class="login-field" value="" placeholder="password">
          </div>

          <button @click="login" class="btn btn-primary btn-large btn-block">login</button>
          <a class="login-link" @click="toggleShowLoginForm">Already a user? Register here</a>
        </div>
      </div>
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

  /*body {*/
    /*font-family: Arial;*/
    /*background-color: #3c98e5;*/
    /*padding: 50px;*/
  /*}*/

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  .login {
    margin: 20px auto;
    width: 300px;
  }
  .login-screen {
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 6px 6px 4px #2b2b2b3d;

  }

  .app-title {
    text-align: center;
    color: #777;
  }

  .login-form {
    text-align: center;
  }
  .control-group {
    margin-bottom: 10px;
  }

  input {
    text-align: center;
    background-color: #ECF0F1;
    border: 2px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 0;
    width: 250px;
    transition: border .5s;
  }

  input:focus {
    border: 2px solid #3498DB;
    box-shadow: none;
  }

  .btn {
    border: 2px solid transparent;
    background: #3498DB;
    color: #ffffff;
    font-size: 16px;
    line-height: 25px;
    padding: 10px 0;
    text-decoration: none;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: none;
    transition: 0.25s;
    display: block;
    width: 250px;
    margin: 0 auto;
  }

  .btn:hover {
    background-color: #2980B9;
  }

  .login-link {
    font-size: 12px;
    color: #444;
    display: block;
    margin-top: 12px;
  }

</style>
