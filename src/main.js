// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/signup', component: Signup},
  {path: '/login', component: Login}
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')

// Start the app on the #app div
// router.start(App, '#app')
//
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
