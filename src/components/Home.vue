<template>
    <div id="home">
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
    margin-top: 150px;
    text-align: center;
}

#buttons p {
    text-align: center;
}

.link {
    font-size: 30px;
}
</style>
