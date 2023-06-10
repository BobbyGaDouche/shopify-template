const express = require('express');
require('dotenv').config();

const Shopify = require('shopify-api-node');

const app = express();
const port = process.env.PORT || 3000;

const shopify = new Shopify({
  shopName: 'your-shop-name',
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_SECRET,
  apiVersion: process.env.SHOPIFY_API_VERSION,
});

app.get('/', (req, res) => {
  shopify.product
    .list()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving products');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
