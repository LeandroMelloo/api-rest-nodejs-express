const express = require("express");
const routes = express.Router();

const produtoController = require('../controller/produtoController');

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

// DEFININDO NOSSA ROTA PARA O ANGULARJS/FRONT-END =========
routes.get('*', function(req, res) {
    // Carrega nossa view index.html que será a única da nossa aplicação
    // O Angular irá lidar com as mudanças de páginas no front-end
    res.sendfile('./public/index.html');
});

// exportando "routes" para o server.js
module.exports = routes;