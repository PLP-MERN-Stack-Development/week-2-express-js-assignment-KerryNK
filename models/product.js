const { v4: uuidv4 } = require('uuid');

class Product {
  constructor(name, description, price, category, inStock) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.inStock = inStock;
  }
}

module.exports = Product;