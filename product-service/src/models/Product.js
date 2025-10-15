const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Mixed, required: true },
  stock_status: { type: String, required: true },
  stock_quantity: { type: Number, default: null },
  category: { type: String, default: '' },
  tags: { type: [String], default: [] },
  on_sale: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
