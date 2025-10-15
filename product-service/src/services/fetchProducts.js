const axios = require('axios');
const Product = require('../models/Product');

const WOO_API_URL = 'https://wp-multisite.convertcart.com/wp-json/wc/v3/products';

const consumerKey = process.env.WOO_CONSUMER_KEY;
const consumerSecret = process.env.WOO_CONSUMER_SECRET;

async function fetchAndSaveProducts() {
  try {
    const response = await axios.get(WOO_API_URL, {
      params: {
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
      },
    });

    const products = response.data;
    for (const p of products) {
      const productData = {
        id: p.id,
        title: p.name,
        price: p.price,
        stock_status: p.stock_status,
        stock_quantity: p.stock_quantity,
        category: p.categories[0]?.name || '',
        tags: p.tags.map(t => t.name) || [],
        on_sale: p.on_sale,
        created_at: p.date_created,
      };

      await Product.findOneAndUpdate(
        { id: productData.id },
        productData,
        { upsert: true, new: true }
      );
    }

    console.log('Products fetched and saved successfully');
  } catch (error) {
    console.error('Error fetching/saving products:', error);
  }
}

module.exports = { fetchAndSaveProducts };
