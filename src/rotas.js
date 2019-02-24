const express = require("express");
const routes = express.Router();

const produtoController = require('./controller/produtoController');

// método de listagem dos produtos
routes.get("/produtos", produtoController.index);

// método de atualização dos produtos
routes.get("/produtos/:id", produtoController.show);

// método de criação dos produtos
routes.post("/produtos", produtoController.create);

// método de atualização dos produtos
routes.put("/produtos/:id", produtoController.update);

// método de exclusão dos produtos
routes.delete("/produtos/:id", produtoController.delete);

// exportando "routes" para o server.js
module.exports = routes;