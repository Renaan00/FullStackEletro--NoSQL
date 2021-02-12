const request = require('../models/PostRequests');

class PostRequestsController {
    indexAction(req, res) {
        request.insertRequest(req, res);
    }
}

module.exports = new PostRequestsController;