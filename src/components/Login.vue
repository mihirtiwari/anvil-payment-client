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
                        <input type="email" class="form-control" placeholder="email@email.com">
                    </div>
                    <div class="form-group">
                        <p>Password: </p>
                        <input type="password" class="form-control" placeholder="Enter your password">
                    </div>
                </div>
                <div style="margin-top: 30px">
                    <button class="btn btn-warning">
                        <router-link to="/payment">
                            Submit <!-- Make it actually authenticate -->
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
