require('dotenv').config();

const { Api, HttpClient } = require("./dist");

if (process.env.BASE_URL && process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
  const cps = new Api(new HttpClient({
    baseUrl: process.env.BASE_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }));

  return cps.api.getV1MerchantWallets().then(res => {
    console.log(res.data);
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    console.log("Done");
  });
}