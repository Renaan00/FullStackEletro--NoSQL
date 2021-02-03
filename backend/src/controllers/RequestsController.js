const requests = require('../models/Requests');

class RequestsController {
    requestAction(req, res) {
        requests.requestProductAction(req, res);
    }
}

module.exports = new RequestsController;