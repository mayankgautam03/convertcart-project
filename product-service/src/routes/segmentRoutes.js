const express = require('express');
const router = express.Router();
const { filterProducts } = require('../services/segmentService');
const Product = require('../models/Product');

router.post('/segment', async (req, res) => {
  try {
    const criteria = req.body;
    const products = await filterProducts(criteria, Product);
    res.json(products);
  } catch (error) {
    console.error('Error filtering products:', error);
    res.status(500).json({ error: 'Failed to filter products' });
  }
});

module.exports = router;
