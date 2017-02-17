<template>
    <div id="payment">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Payment</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px">
                <div class="col-md-offset-4">
                    <div class="form-group">
                        <p>Cardholder Name: </p>
                        <input type="text" class="form-control" placeholder="Cardholder Name" v-model="details.name">
                    </div>
                    <div class="form-group">
                        <p>Card Number: </p>
                        <input type="text" maxlength="16" class="form-control" placeholder="Card Number" v-model="details.number">
                    </div>
                    <div class="form-group">
                        <p>Expiration Date: </p>
                        <div>
                            <input type="text" maxlength="2" class="form-control exp" placeholder="MM" v-model="details.exp_month">
                            <input type="text" maxlength="2" class="form-control exp" placeholder="YY" v-model="details.exp_year">
                        </div>
                    </div>
                    <div class="form-group" style="clear: left">
                        <p>CVC: </p>
                        <input type="text" maxlength="3" class="form-control" placeholder="CVC" v-model="details.cvc">
                    </div>
                    <div class="form-group">
                        <p>Zip Code: </p>
                        <input type="text" maxlength="5" class="form-control" placeholder="Zip Code (e.g. 47906)" v-model="details.zip">
                    </div>
                </div>
                 <div style="margin-top: 30px">
                     <button class="btn btn-warning submit" v-on:click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'payment',
    data: function () {
      return {
        details: {
          number: '',
          cvc: '',
          exp_month: '',
          exp_year: '',
          zip: '',
          name: ''
        }
      }
    },
    methods: {
        submit: function () {
            if (!Stripe.card.validateCardNumber(this.details.number)){
                window.alert('Please put in a correct credit card number')
            }
            else if (!Stripe.card.validateExpiry(this.details.exp_month + '/' + this.details.exp_year)){
                window.alert('Please put in a correct expiration date')
            }
            else if (!Stripe.card.validateCVC(this.details.cvc)){
                window.alert('Please put in a correct CVC')
            }
            else if (this.details.zip === ''){
                window.alert('Please put in a zip')
            }
            else {
            var details = {
                number: this.details.number,
                cvc: this.details.cvc,
                exp: this.details.exp_month + "/" + this.details.exp_year,
                address_zip: this.details.zip,
                name: this.details.name
            }

            var exp_month_year = this.details.exp_month + this.details.exp_year
            var cardNumber = this.details.number
            var cvc = this.details.cvc
            var bzip = this.details.zip
            Stripe.card.createToken(details, function (status, response) {
                if (response.error){
                    window.alert("Stripe error: " + response.error["message"]);
                }
                else {
                    var token = response.id
                    localStorage.setItem('stripe_token', token)

                    var data = "card=" + cardNumber + "&cvc=" + cvc + "&bzip=" + bzip + "&exp=" + exp_month_year + "&stripe_token=" + token;
                    var xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;

                    xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            var res = JSON.parse(this.responseText)
                            window.location.href = "/#/confirmation"
                        }
                    });

                    xhr.open("POST", "https://anvil-payments.herokuapp.com/api/pay");
                    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    xhr.setRequestHeader("authorization", "Bearer " + localStorage.getItem('token'));
                    xhr.setRequestHeader("cache-control", "no-cache");
                    xhr.setRequestHeader("postman-token", "1ccc32a1-078d-bab1-0e49-a3242c3c4ad0");

                    xhr.send(data);
                }
            })
        }
      }
    }
}
</script>

<style>
.exp {
    width: 15%;
    display: inline;
    float: left;
    margin-bottom: 15px;
}
</style>
