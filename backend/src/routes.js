const { Router } = require('express');

const ProductsController = require('./controllers/ProductsController');
const PostRequestsController = require('./controllers/PostRequestsController');

const routes = new Router;

routes.get("/products", ProductsController.indexAction);
routes.post("/request", PostRequestsController.indexAction);

module.exports = routes;