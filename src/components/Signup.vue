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
export default {
  name: 'signup'
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
