// filepath: [server.js](http://_vscodecontentref_/1)
require('dotenv').config();
const express = require('express');
const productsRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

// Hello World route at root endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Mount product routes
app.use('/api/products', productsRoutes);

// Global error handler (must be after all routes)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});