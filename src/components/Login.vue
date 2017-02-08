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
                    <button class="btn btn-warning" v-on:click="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import auth from '../auth'
import Vue from 'vue'
import Payment from './Payment.vue'

export default {
  name: 'login',
  components: {
      Payment
  },
  data: function () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      authenticated: false
    }
  },
  // computed : {
  //     authenticated: function () {
  //         return this.authenticated = true
  //     }
  // },
  methods: {
      //change this
    submit: function () {
        // this.authenticated = true
        // window.location.href = "/#/payment"
        var data = "password=" + this.credentials.password + "&email=" + this.credentials.email
        var xhr = new XMLHttpRequest()
        xhr.withCredentials = true
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText)
                if (response["message"] === "Missing credentials"){
                    window.alert("Please fill in all boxes")
                }
                else if (response["message"] === "Password is wrong"){
                    window.alert("Invalid password")
                }
                else if (response["message"] === "User not found"){
                    window.alert("Invalid email and/or password")
                }
                else {
                    localStorage.setItem('token', response["token"])
                    window.location.href = "/#/payment"
                }
            }
        })

        xhr.open("POST", "https://anvil-payments.herokuapp.com/api/login")
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.setRequestHeader("cache-control", "no-cache")
        xhr.setRequestHeader("postman-token", "bd076ec3-bcc4-2eb2-5105-95d5456accf3")
        xhr.send(data)
    }
  }
}
</script>
