const cron = require('node-cron');
const { fetchAndSaveProducts } = require('../services/fetchProducts');

function scheduleProductSync() {
  // Schedule to run at minute 0 past every hour
  cron.schedule('0 * * * *', () => {
    console.log('Running scheduled product sync...');
    fetchAndSaveProducts();
  });
}

module.exports = { scheduleProductSync };
