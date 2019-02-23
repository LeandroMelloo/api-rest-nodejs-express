const express = require("express");
const routes = express.Router();

const produtoController = require('./controller/produtoController');

// Primeira rota
routes.get("/produtos", produtoController.index)

// exportando "routes" para o server.js
module.exports = routes;