const mongoose = require("mongoose");

const produto = mongoose.model('Produto');

module.exports = {
    // faz uma listagem de todos os produtos da nossa base de dados
    async index(req, res) {
        const Produtos = await produto.find();

        // só será executado depois que todos os registros for retornados do DB
        return res.json(Produtos);
    }
};