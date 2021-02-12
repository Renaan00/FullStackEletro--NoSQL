const getProducts = require('../models/GetProducts');

class ProductsController {
    indexAction(req, res) {
        getProducts.getAll(req, res);
    }
}

module.exports = new ProductsController;
