import { shopifyApi } from '@shopify/shopify-api'; // Use import syntax

const { ShopifyRestResources } = require('@shopify/shopify-api/dist/rest/types');

const config = {
  apiKey: 'f407beb8cca59260ce936842917934cd',
  apiSecretKey: 'c537296e3cc78220350920f12d7c23d7',
  scopes: ['read_products', 'write_orders'],
  hostName: 'brewedonline.myshopify.com'
};

const shopify = shopifyApi(config);

console.log(`Shopify API Library Version: ${shopify.config.libraryVersion}`);

shopify.rest.products
  .list()
  .then((products) => {
    console.log(products);
  })
  .catch((error) => {
    console.error('Error retrieving products:', error);
  });
