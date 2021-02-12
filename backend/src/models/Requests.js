const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Requests = new Schema({
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    }, 
    telefone: {
        type: String,
        require: true
    },
    produto: {
        type: String,
        require: true
    },
    quantidade: {
        type: Number,
        require: true
    }
});

mongoose.model('pedidos', Requests);