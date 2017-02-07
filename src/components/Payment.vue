<template>
    <div id="payment">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Payment</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px">
                <p id="payment-method">Select a payment method: </p>
                <div class="form-group">
                    <div class="radio">
                        <label for="credit_type">
                            <input type="radio">
                            Credit Card
                        <label>
                        <label for="paypal">
                            <input type="radio">
                            Paypal
                        <label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'payment'
}
</script>

<style>
#payment-method {
    float: left;
    font-weight: bold;
    font-size: 15px;
}

#cards img {
    width: 20%;
    height: 20%;
}
</style>
