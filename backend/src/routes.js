const { Router } = require('express');

const ProductsController = require('./controllers/ProductsController');
const RequestsController = require('./controllers/RequestsController');

const routes = new Router;

routes.get("/products", ProductsController.indexAction);
routes.post("/products", RequestsController.requestAction);

module.exports = routes;