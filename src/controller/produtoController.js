const mongoose = require("mongoose");

const produto = mongoose.model('Produto');

// faz o exports para o serviço "rotas.js"
module.exports = {
    //rota de listagem dos produtos no BD
    async index(req, res) {
        const { page = 1 } = req.query; // desestruturação utilizado no JS6
        const produtoIndex = await produto.paginate({}, { page, limit: 10 });

        // só será executado depois que todos os registros for retornados do DB
        return res.json(produtoIndex);
    },
    
    // rota de busca dos produtos no BD
    async show(req, res) {
        const produtoShow = await produto.findById(req.params.id);

        // só será executado depois que os registros for atualizado no DB
        return res.json(produtoShow);
    },

    // rota de criação dos produtos no DB
    async create(req, res) {
        const produtoCreate = await produto.create(req.body);

        // só será executado depois que os registros for inseridos no DB
        return res.json(produtoCreate);
    },

    // rota de atualização dos produtos no DB
    async update(req, res) {
        const produtoUpdate = await produto.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // só será executado depois que os registros for inseridos no DB
        return res.json(produtoUpdate);
    },

    // rota de exclusão dos produtos no DB
    async delete(req, res) {
        await produto.findByIdAndRemove(req.params.id);

        // só será executado depois que os registros for inseridos no DB
        return res.send("Produto excluido com Sucesso!");
    },

};