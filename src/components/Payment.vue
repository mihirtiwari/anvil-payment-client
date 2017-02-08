<template>
    <div id="payment">
        <img src="../assets/logo.png">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h1>Payment</h1>
            </div>
            <div class="col-md-8 col-md-offset-2" style="margin-top: 50px">
                <p id="payment">Please enter the following information: </p>
                <div class="col-md-offset-3">
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
                    <form action="/your-charge-code" method="POST" id="payment-form">
                        <!-- <span class="payment-errors"></span> -->

                        <div class="form-group">
                            <p class="label">Card Number: </p>
                            <input type="text" size="20" class="form-control" placeholder="Card Number" data-stripe="number">
                                <!-- <span>Card Number</span>
                                <input type="text" size="20" data-stripe="number">
                            </label> -->
                        </div>

                        <div class="form-group">
                            <p class="label">Expiration (MM/YY): </p>
                            <input type="text" size="5" class="form-control" data-stripe="exp_month_year" placeholder="MM/YY">
                        </div>

                        <div class="form-group">
                            <p class="label">CVC: </p>
                            <input type="text" class="form-control" size="4" data-stripe="cvc" placeholder="CVC">
                            <!-- <label>
                                <span>CVC</span>
                                <input type="text" size="4" data-stripe="cvc">
                            </label> -->
                        </div>

                        <div class="form-group">
                            <p class="label">Billing ZIP Code: </p>
                            <input type="text" class="form-control "size="6" data-stripe="address_zip" placeholder="Billing ZIP Code">
                            <!-- <label>
                                <span>Billing ZIP Code</span>
                                <input type="text" size="6" data-stripe="address_zip">
                            </label> -->
                        </div>
                    </form>
                </div>
                 <div style="margin-top: 30px">
                     <button class="btn btn-warning">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.label {
    text-align: left;
}

#payment {
    font-weight: bold;
    text-align: left;
}

.expiration {
    width: 10%;
    margin-right: 0px;
}
</style>
