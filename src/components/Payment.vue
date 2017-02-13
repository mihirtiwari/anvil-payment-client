<template>
    <div id="payment">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Payment</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px">
                <p id="payment">Please enter the following information: </p>
                <div class="col-md-offset-4">
                    <!-- <div class="form-group">
                        <p>First Name: </p>
                        <input type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <p>Last Name: </p>
                        <input type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <p>Credit Card number: </p>
                        <input type="text" class="form-control" placeholder="Credit Card Number">
                    </div>
                    <div class="form-group">
                        <p>Expiration date: </p>
                        <input type="text" class="form-control" placeholder="Expiration Date">
                    </div> -->
                    <form action="/your-charge-code" method="POST" id="payment-form" autocomplete="on">
                        <!-- <span class="payment-errors"></span> -->

                        <div class="form-group">
                            <p class="label">Card Number: </p>
                            <input type="tel" maxlength="12" class="form-control" placeholder="Card Number" v-model="details.number">
                                <!-- <span>Card Number</span>
                                <input type="text" size="20" data-stripe="number">
                            </label> -->
                        </div>

                        <div class="form-group">
                            <p class="label">Expiration (MM/YY): </p>
                            <input type="tel" maxlength="5" class="form-control" placeholder="MM/YY" v-model="details.exp_month_year">
                        </div>

                        <div class="form-group">
                            <p class="label">CVC: </p>
                            <input type="tel" class="form-control" maxlength="3" placeholder="CVC" v-model="details.cvc">
                            <!-- <label>
                                <span>CVC</span>
                                <input type="text" size="4" data-stripe="cvc">
                            </label> -->
                        </div>

                        <div class="form-group">
                            <p class="label">Billing ZIP Code: </p>
                            <input type="tel" class="form-control" maxlength="5" placeholder="Billing ZIP Code" v-model="details.zip">
                            <!-- <label>
                                <span>Billing ZIP Code</span>
                                <input type="text" size="6" data-stripe="address_zip">
                            </label> -->
                        </div>
                    </form>
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
          exp_month_year: '',
          zip: ''
      },
      token: ''
      }
    },
    methods: {
        submit: function () {
            if (!Stripe.card.validateCardNumber(this.details.number)){
                window.alert('Please put in a correct credit card number')
            }
            else if (!Stripe.card.validateExpiry(this.details.exp_month_year)){
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
                exp: this.details.exp_month_year,
                address_zip: this.details.zip
            }

            Stripe.card.createToken(details, function (status, response) {
                if (response.error){
                    window.alert("There was an error! Please re-enter the information")
                }
                else {
                    var token = response.id
                    localStorage.setItem('stripe_token', token)
                }
            })

            var token = localStorage.getItem('stripe_token')

            var data = "card=" + this.details.number + "&cvc=" + this.details.cvc + "&bzip=" + this.details.zip + "&exp=" + this.details.exp_month_year + "&stripe_token=" + token;
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
      }
    }
}
</script>

<style>
.label {
    text-align: left;
    color: red;
}

#payment {
    font-weight: bold;
    text-align: center;;
}

.expiration {
    width: 10%;
    margin-right: 0px;
}
</style>
