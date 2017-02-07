<template>
    <div id="login">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Login</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px; text-align: center">
                <div class="col-md-offset-4">
                    <div class="form-group">
                        <p>Email: </p>
                        <input type="email" class="form-control" placeholder="email@email.com" v-model="credentials.email">
                    </div>
                    <div class="form-group">
                        <p>Password: </p>
                        <input type="password" class="form-control" placeholder="Enter your password" v-model="credentials.password">
                    </div>
                </div>
                <div style="margin-top: 30px">
                    <button class="btn btn-warning" v-on:click="submit()">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import auth from '../auth'
export default {
  name: 'login',
  data: function () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  // data () {
  //   return {
  //     credentials: {
  //       email: '',
  //       password: ''
  //     },
  //     error: ''
  //   }
  // },
  methods: {
    submit: function () {
      var cred = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      window.alert(cred.email + ' ' + cred.password)
    }
  }

}
</script>
