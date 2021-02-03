const connection = require('../config/connection');

class Requests {

    requestProductAction(req, res) {
        const { nome, produto, quantidade, endereco, telefone, id } = req.body;
        if (nome !== "" && produto !== "" && quantidade !== "" && endereco !== "" && telefone !== "" && id !== "") {
            connection.query(`INSERT INTO pedido_cliente (nome, nome_produto, quantidade, endereco, telefone, id_pedido) values ('${nome}', '${produto}', '${quantidade}', '${endereco}', '${telefone}', '${id}')`, (error, result) => {
                if (error) {
                    res.json(250);
                } else {
                    res.json(100);
                }
            })
        } else {
            res.json(200)
        }
    }
}

module.exports = new Requests;

