const Product = require('../models/Product');

class ProductsController {
  constructor() {
    this.products = [];
  }

  getAllProducts = (req, res) => {
    let filtered = [...this.products];

    // Filter by category
    if (req.query.category) {
      filtered = filtered.filter(
        p => p.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }

    // Search by name
    if (req.query.search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(req.query.search.toLowerCase())
      );
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const start = (page - 1) * limit;
    const end = page * limit;
    const paginated = filtered.slice(start, end);

    res.status(200).json({
      page,
      limit,
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / limit),
      products: paginated,
    });
  };

  getProductById = (req, res, next) => {
    const product = this.products.find(p => p.id === req.params.id);
    if (!product) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json(product);
  };

  createProduct = (req, res) => {
    const { name, description, price, category, inStock } = req.body;
    const newProduct = new Product(name, description, price, category, inStock);
    this.products.push(newProduct);
    res.status(201).json(newProduct);
  };

  updateProduct = (req, res, next) => {
    const product = this.products.find(p => p.id === req.params.id);
    if (!product) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      return next(err);
    }
    const { name, description, price, category, inStock } = req.body;
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.inStock = inStock;
    res.status(200).json(product);
  };

  deleteProduct = (req, res, next) => {
    const index = this.products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      return next(err);
    }
    this.products.splice(index, 1);
    res.status(204).send();
  };

  getStats = (req, res) => {
    const stats = {};
    this.products.forEach(p => {
      stats[p.category] = (stats[p.category] || 0) + 1;
    });
    res.json({ countByCategory: stats });
  };
}

module.exports = new ProductsController();