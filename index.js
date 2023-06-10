// Import the necessary modules and functions
import { shopifyApi } from '@shopify/shopify-api';
import { ShopifyRestResources } from '@shopify/shopify-api/dist/rest/types';

// Define your config parameters
const config = {
  apiKey: 'f407beb8cca59260ce936842917934cd',
  apiSecretKey: 'c537296e3cc78220350920f12d7c23d7',
  scopes: ['read_products', 'write_orders'], // Example scopes: read_products, write_orders
  hostName: 'brewedonline.myshopify.com',
};

// Create the Shopify instance
const shopify = shopifyApi<ShopifyRestResources>(config);

// Use the Shopify instance
// Example: Output the Shopify API library version
console.log(`Shopify API Library Version: ${shopify.config.libraryVersion}`);

// Example: Access the REST resource
shopify.rest.products
  .list()
  .then((products) => {
    console.log(products);
  })
  .catch((error) => {
    console.error('Error retrieving products:', error);
  });
