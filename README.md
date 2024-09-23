# About

A wrapper around the API for CoinPayments V2 ([https://www.coinpayments.com](https://www.coinpayments.com)).

This library is designed to make it easy to work with the CoinPayments V2 API. It uses the official swagger documentation to automatically generate a helper library that handles all authentication and formatting in a simple and effective way.

Please refer to the official documentation for more: [https://docs.coinpayments.com/](https://www.coinpayments.com).

## Example

```
const { Api, HttpClient } = require("coinpayments-v2-openapi-client");

const cps = new Api(new HttpClient({
  baseUrl: "https://api.coinpayments.net",
  clientId: <YOUR_CLIENT_ID>,
  clientSecret: <YOUR_CLIENT_SECRET>
}));

return cps.api.getV1MerchantWallets().then(res => {
  console.log(res.data);
}).catch(err => {
  console.error(err);
}).finally(() => {
  console.log("Done");
});
```