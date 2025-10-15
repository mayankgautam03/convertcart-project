require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const segmentRoutes = require('./routes/segmentRoutes');
const { fetchAndSaveProducts } = require('./services/fetchProducts');
const { scheduleProductSync } = require('./cron/ingestCron');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB and start sync tasks
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    fetchAndSaveProducts();
    scheduleProductSync();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Mount routes after middleware
app.use('/api', productRoutes);
app.use('/api', segmentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Product Service is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Product Service listening on port ${PORT}`);
});
