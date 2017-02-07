// import {router} from '../main.js'
//
//URL and endpoints
const API_URL = 'https://anvil-payments.herokuapp.com/api'
const LOGIN_URL = API_URL + '/login'
const SIGNUP_URL = API_URL + '/register'
const PROFILE_URL = API_URL + '/profile'
//
// export default {
//
//     user: {
//         authenticated: false
//     },
//
//     login(context, credentials, redirect) {
//         context.$http.post(LOGIN_URL)
//     }
// }

var request = require('request');

var options = {
    url: LOGIN_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    body: {
        email: 'text@test.com'
        password: 'testpass'
    }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(response);
    console.log(info);
  }
}

request(options, callback);
