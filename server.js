const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// envie dados no formato Json
app.use(express.json());

// cors disponibiliza acesso a API para ser acessada publicamente
app.use(cors());

// Iniciando DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });
requireDir("./src/model");

// inserir novos valores, atualizar, deletar ou buscar
// const Produto = mongoose.model("Produto");

// importando o "rotas.js", e vai receber todas as requisições
app.use('/api', require('./src/rotas'));

app.listen(3000);