const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    nome_produto: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    }, 
    preco: {
        type: Number,
        require: true
    },
    imagem: {
        type: String,
        require: true
    }
});

mongoose.model('produtos', Products);