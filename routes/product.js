const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const validateProduct = require('../middleware/validateProduct');
const auth = require('../middleware/auth');

// GET /api/products - list products with filtering, search, pagination
router.get('/', auth, productsController.getAllProducts);

// GET /api/products/:id - get product by ID
router.get('/:id', auth, productsController.getProductById);

// POST /api/products - create product with validation
router.post('/', auth, validateProduct, productsController.createProduct);

// PUT /api/products/:id - update product with validation
router.put('/:id', auth, validateProduct, productsController.updateProduct);

// DELETE /api/products/:id - delete product
router.delete('/:id', auth, productsController.deleteProduct);

// GET /api/products/stats - product statistics
router.get('/stats', auth, productsController.getStats);

module.exports = router;