# Standard e-commerce flow for NOWPayments API:

1. API - Check API availability with the "GET API status" method.

2. Check the list of available payment currencies with the "GET available currencies" method.

3. UI - Ask a customer to select item/items for purchase to determine the total sum(in our case select the deposit amount).

4. UI - Ask a customer to select payment currency.

5. API - Get the minimum payment amount for the selected currency pair (payment currency to your Outcome Wallet currency) with the "GET Minimum payment amount" method.

6. API - Get the estimate of the total amount in crypto with "GET Estimated price" and check that it is larger than the minimum payment amount from step 4.

7. API - Call the "POST Create payment" method to create a payment and get the deposit address (in our example, the generated BTC wallet address is returned from this method).

8. UI - Ask a customer to send the payment to the generated deposit address (in our example, user has to send BTC coins).

9. UI - A customer sends coins, NOWPayments processes and exchanges them (if required), and settles the payment to your Outcome Wallet (in our example, to your ETH address).

10. API - You can get the payment status either via our IPN callbacks or manually, using "GET Payment Status" and display it to a customer so that they know when their payment has been processed.

11. API - you call the list of payments made to your account via the "GET List of payments" method. Additionally, you can see all of this information in your Account on NOWPayments website.

# Alternative flow

1. API - Check API availability with the "GET API status" method.

2. Check the list of available payment currencies with the "GET available currencies" method.

3. UI - Ask a customer to select item/items for purchase to determine the total sum(in our case select the deposit amount).

4. UI - Ask a customer to select payment currency.

5. API - Get the minimum payment amount for the selected currency pair (payment currency to your Outcome Wallet currency) with the "GET Minimum payment amount" method;

6. API - Get the estimate of the total amount in crypto with "GET Estimated price" and check that it is larger than the minimum payment amount from step 4;

7. API - Call the "POST Create Invoice method to create an invoice. Set "success_url" - parameter so that the user will be redirected to your website after successful payment.

8. UI - display the invoice url or redirect the user to the generated link.
   NOWPayments - the customer completes the payment and is redirected back to your website (only if "success_url" parameter is configured correctly!).

9. API - You can get the payment status either via our IPN callbacks or manually, using "GET Payment Status" and display it to a customer so that they know when their payment has been processed.

10. API - you call the list of payments made to your account via the "GET List of payments" method. Additionally, you can see all of this information in your Account on NOWPayments website.
