const products = require('../models/Products');

class ProductsController {
    indexAction(req, res) {
        products.getAll(req, res);
    }
}

module.exports = new ProductsController;
