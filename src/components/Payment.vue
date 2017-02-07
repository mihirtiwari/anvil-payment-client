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
                            <input type="radio" name = "only">
                            Credit Card
                        <label>

                        <label for="paypal">
                            <input type="radio" name= "only">
                            Paypal
                        <label>
                    </div>
                </div>
                <div style="margin-top: 30px">
                    <button class="btn btn-warning">Submit</button>
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
    /*padding-top: 11px;*/
}

.radio {
    display: inline;
}

#cards img {
    width: 20%;
    height: 20%;
}
</style>
