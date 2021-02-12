const mongoose = require('mongoose')

function connection() {
    mongoose
    .connect('mongodb://localhost/fs_eletro', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Conectado com o Banco")
        }).catch((error) => {
            console.log(`Erro ao tentar a conexão ${error}`)
        })
}

module.exports = connection();