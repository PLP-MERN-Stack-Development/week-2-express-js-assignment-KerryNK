function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;
  if (
    typeof name !== 'string' || name.trim() === '' ||
    typeof description !== 'string' || description.trim() === '' ||
    typeof price !== 'number' || price < 0 ||
    typeof category !== 'string' || category.trim() === '' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Invalid product data' });
  }
  next();
}

module.exports = validateProduct;