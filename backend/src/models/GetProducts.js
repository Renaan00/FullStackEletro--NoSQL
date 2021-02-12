const mongoose  = require('mongoose');

require('./Products');
require('../config/connection');

const Product = mongoose.model('produtos')

class GetProducts {
    async getAll(req, res) {
        const productsResponse = await Product.find()
        const productsJson = await productsResponse;

        res.json(productsJson)
    }
}

module.exports = new GetProducts;