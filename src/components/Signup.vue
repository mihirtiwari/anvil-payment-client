<template>
    <div id="signup">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Sign Up</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px; text-align: center">
                <div class="col-md-offset-4">
                    <div class="form-group">
                        <p>First Name: </p>
                        <input type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <p>Last Name: </p>
                        <input type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <p>Email: </p>
                        <input type="email" class="form-control" placeholder="email@email.com">
                    </div>
                    //need to check for passwords matching and that no field is empty
                    <div class="form-group">
                        <p>Password: </p>
                        <input type="password" class="form-control" placeholder="Enter your password">
                    </div>
                    <div class="form-group">
                        <p>Confirm Password: </p>
                        <input type="password" class="form-control" placeholder="Confirm your password">
                    </div>
                </div>
                <div style="margin-top: 30px">
                    <button class="btn btn-warning"><router-link to="/payment">Submit</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import auth from '../auth'
// import Vue from 'vue'

export default {
  name: 'signup',
  data: function () {
    return {
      credentials: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    }
  },
  methods: {
      //change this
    submit: function () {
        var data = "password=" + this.credentials.password + "&email=" +
        this.credentials.email + "&name=" + this.credentials.first_name + "&nameLast=" + this.credentials.last_name

        var xhr = new XMLHttpRequest()
        xhr.withCredentials = true

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                // var response = JSON.parse(this.responseText)
                // if (response["message"] === "Missing credentials"){
                //     window.alert("Please fill in all boxes")
                // }
                // else if (response["message"] === "User not found"){
                //     window.alert("Invalid email and/or password")
                // }
                // else {
                //     console.log("success")
                // }
                console.log("works")
            }
        })

        xhr.open("POST", "https://anvil-payments.herokuapp.com/api/login")
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.setRequestHeader("cache-control", "no-cache")
        xhr.setRequestHeader("postman-token", "88efa6a2-5c23-4a60-e6e0-168aa00917d1")

        xhr.send(data)
    }
  }
  // ready () {
  //   this.$http.post('https://anvil-payments.herokuapp.com/api/login', {email: 'f', password: 'f'}).then((response) => {
  //     console.log('success')
  //   }, (response) => {
  //     console.log('error')
  //   })
  // }

}
</script>

<style>
.container div {
    text-align: center;
}

.form-control {
    width: 50%;
}

.form-group p {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
}
</style>
