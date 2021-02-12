const mongoose  = require('mongoose');

require('./Requests');
require('../config/connection');

const Request = mongoose.model('pedidos')

class PostRequests {
    insertRequest(req, res) {
        const newRequest = new Request({
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            produto: req.body.produto,
            quantidade: req.body.quantidade
        })
    
        newRequest.save()
        res.json({message: "Pedido Concluido com sucesso", request: newRequest})
    }
}

module.exports = new PostRequests;