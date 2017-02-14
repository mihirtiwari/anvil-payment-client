<template>
    <div id="home">
        <div class="container">
        <div class="col-md-6 col-md-offset-3" id="message">
            <p>
                Welcome to the Anvil Payment System! Sign up today and pay only $5
                on your first month (that's 50% off!) at The Anvil! After your
                first month, you will be charged $10 per month, starting mid March.
            </p>
            <br>
            <p>
                <b>NOTE:</b> If you sign up, you will have to input your credit card number
                so proceed with caution
            </p>
        </div>
        </div>
        <div class="container">
        <div id="buttons" class="col-md-offset-3 col-md-6">
            <p>
                <button type="button" class="btn btn-warning link" v-on:click='tosignup'>
                        Sign up
                </button>
            </p>
            <p>
                <button type="button" class="btn btn-warning link" v-on:click='tologin'>
                        Login
                </button>
            </p>
        </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    methods: {
        tosignup: function () {
            // window.location.href = "/#/signup"
            this.$router.push('/signup')
        },
        tologin: function () {
            // window.location.href = "/#/login"
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.btn {
    background-color: #FFCD2E;
}

.btn:hover {
    background-color: #FFCD2E;
}

button {
    width: 30%;
}

#buttons {
    margin-top: 50px;
    text-align: center;
}

#buttons p {
    text-align: center;
}

.link {
    font-size: 30px;
}

#message {
    margin-top: 50px;
}

#message p {
    text-align: center;
    font-size: 20px;
}
</style>
