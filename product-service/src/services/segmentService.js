async function filterProducts(criteria, ProductModel) {
  const query = {};

  if (criteria.min_price) {
    query.price = { $gte: criteria.min_price };
  }
  if (criteria.stock_status) {
    query.stock_status = criteria.stock_status;
  }
  if (criteria.category) {
    query.category = criteria.category;
  }
  if (criteria.tags && criteria.tags.length > 0) {
    query.tags = { $in: criteria.tags };
  }

  // Add more criteria as needed

  return await ProductModel.find(query);
}

module.exports = { filterProducts };


async function filterProducts(criteria, ProductModel) {
  const query = {};

  if (criteria.min_price) query.price = { $gte: criteria.min_price };
  if (criteria.stock_status) query.stock_status = criteria.stock_status;
  if (criteria.category) query.category = criteria.category;
  if (criteria.tags && criteria.tags.length) query.tags = { $in: criteria.tags };

  return await ProductModel.find(query);
}

module.exports = { filterProducts };


async function filterProducts(criteria, ProductModel) {
  const query = {};

  if (criteria.min_price) {
    query.price = { $gte: criteria.min_price };
  }
  if (criteria.stock_status) {
    query.stock_status = criteria.stock_status;
  }
  if (criteria.category) {
    query.category = criteria.category;
  }
  if (criteria.tags && criteria.tags.length > 0) {
    query.tags = { $in: criteria.tags };
  }

  // Add more filter rules here if needed

  return await ProductModel.find(query);
}

module.exports = { filterProducts };
