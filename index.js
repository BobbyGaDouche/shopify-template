const express = require('express');
require('dotenv').config();

const Shopify = require('shopify-api-node');

const app = express();
const port = process.env.PORT || 3000;

console.log('Environment variables:');
console.log('SHOP_NAME:', process.env.SHOP_NAME);
console.log('SHOPIFY_API_KEY:', process.env.SHOPIFY_API_KEY);
console.log('SHOPIFY_API_SECRET_KEY:', process.env.SHOPIFY_API_SECRET_KEY);
console.log('SHOPIFY_API_VERSION:', process.env.SHOPIFY_API_VERSION);

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
  apiVersion: process.env.SHOPIFY_API_VERSION,
});

app.get('/', (req, res) => {
  console.log('Received GET request');
  shopify.product
    .list()
    .then((products) => {
      console.log('Products:', products);
      res.json(products);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).send('Error retrieving products');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
