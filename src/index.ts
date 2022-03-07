import "dotenv/config";
import axios from "axios";

const API_KEY_PROD = process.env.API_KEY_PROD;
const API_KEY_TEST = process.env.API_KEY_TEST;

const main = async () => {
  const apiStatus = await axios.get("https://api.nowpayments.io/v1/status");
  console.log("API status is: ", apiStatus.data.message);

  const availableCurrencies = await axios.get(
    "https://api.nowpayments.io/v1/currencies",
    {
      headers: {
        "x-api-key": API_KEY_PROD!,
      },
    }
  );
  console.log("Available currencies: ", availableCurrencies.data);

  const availableCheckedCurrencies = await axios.get(
    "https://api.nowpayments.io/v1/merchant/coins",
    {
      headers: {
        "x-api-key": API_KEY_PROD!,
      },
    }
  );
  console.log("Available currencies: ", availableCheckedCurrencies.data);

  const minPaymentAmount = await axios.get(
    "https://api.nowpayments.io/v1/min-amount?currency_from=btc", //&currency_to=trx",
    {
      headers: {
        "x-api-key": API_KEY_PROD!,
      },
    }
  );
  console.log("Min payment amount: ", minPaymentAmount.data);

  const estimatePrice = await axios.get(
    "https://api.nowpayments.io/v1/estimate?amount=10&currency_from=usd&currency_to=btc",
    {
      headers: {
        "x-api-key": API_KEY_PROD!,
      },
    }
  );
  console.log("Estimate price: ", estimatePrice.data);

  const createPayment = await axios.post(
    "https://api.nowpayments.io/v1/payment",
    { price_amount: 10, price_currency: "usd", pay_currency: "btc" },
    {
      headers: {
        "x-api-key": API_KEY_PROD!,
        "Content-Type": "application/json",
      },
    }
  );
  console.log("Create payment: ", createPayment.data);
};

main();
