<template>
    <div id="home">
        <div id="buttons" class="col-md-offset-3 col-md-6">
            <p>
                <button type="button" class="btn btn-warning">
                    <router-link to="/signup" class="link">
                        Sign up
                    </router-link>
                </button>
            </p>
            <p>
                <button type="button" class="btn btn-warning">
                    <router-link to="/login" class="link">
                        Login
                    </router-link>
                </button>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>



<style>
.btn {
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
