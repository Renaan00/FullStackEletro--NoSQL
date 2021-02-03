const connection = require('../config/connection')

class Products {
    constructor() {
        this.id;
        this.nome;
        this.descricao;
        this.preco;
        this.imagem;
    }

    getAll(req, res) {
        connection.query("SELECT * FROM produtos", (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = new Products;