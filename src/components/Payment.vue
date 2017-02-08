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
                    <div id="radio1">
                        <label for="credit_type">
                            <input type="radio" name = "only">
                            <span class="names">Credit Card</span>
                        <label>

                        <label for="paypal">
                            <input type="radio" name= "only">
                            <span class="names">Paypal</span>
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

.names {
    font-weight: normal;
    padding-left: 10px;
    padding-right: 30px;
}

input[type="radio"]:checked+span { 
    font-weight: bold;
 }

#cards img {
    width: 20%;
    height: 20%;
}
</style>
